import React, { Component } from "react";
import axios from "axios";

import Rent from "./Rent/Rent";
import TextInput from "../TextInput/TextInput";

import Checkbox from "material-ui/Checkbox";
import { Pie } from "react-chartjs-2";
import FlatButton from "material-ui/FlatButton";

import "./Budget.css";

export default class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFields: ["Groceries", "Loans", "Misc Expenditures"],
      customInput: ["Rent", "Gas", "Internet", "Utilities"],
      rent: 0,
      utilities: 0,
      internet: 0,
      gas: 0,
      groceries: 0,
      loans: 0,
      savings: 0,
      debt: 0,
      misc: 0,
      taxes: {},
      income: 0,
      submit: false,
      customCheck: false
    };
    this.handleInfo = this.handleInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRent = this.handleRent.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.handleRedo = this.handleRedo.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/getTaxes")
      .then(response => {
        this.setState({
          taxes:
            (response.data.taxInfo.annual.federal.amount +
              response.data.taxInfo.annual.fica.amount +
              response.data.taxInfo.annual.state.amount) /
            12,
          income:
            (response.data.totalIncome -
              (response.data.taxInfo.annual.federal.amount +
                response.data.taxInfo.annual.fica.amount +
                response.data.taxInfo.annual.state.amount)) /
            12
        });
        console.log(response.data);
      })
      .catch(err => console.log(err));
    axios.get("/api/getAvgPrices").then(response =>
      this.setState({
        utilities: response.data.util,
        internet: response.data.internet,
        gas: response.data.gas
      })
    );
  }

  handleInfo(field, val) {
    let section = field.toLowerCase();
    section === "misc expenditures" ? (section = "misc") : false;
    this.setState({ [section]: parseInt(val, 10) });
  }

  updateCheck() {
    this.setState({ customCheck: !this.state.customCheck });
  }

  handleSubmit() {
    this.setState({ submit: true });
  }

  handleRent(val) {
    axios
      .post("/api/getRent", { headers: { type: val } })
      .then(response => this.setState({ rent: response.data.rent }))
      .catch(err => console.log(err));
  }

  handleRedo() {
    this.setState({
      groceries: 0,
      loans: 0,
      savings: 0,
      debt: 0,
      misc: 0,
      submit: false
    });
  }

  render() {
    const styles = {
      floatingLabelFocusStyle: {
        color: "black"
      },
      underlineStyle: {
        borderColor: "black"
      }
    };
    const style = {
      backgroundColor: "#FFF200",
      color: "black"
      //   fontSize: "12px",
      //   border: "black 3px solid"
    };
    let expendable =
      this.state.income -
      (this.state.rent +
        this.state.utilities +
        this.state.internet +
        this.state.gas +
        this.state.groceries +
        this.state.loans +
        this.state.misc);

    let inputFields = this.state.inputFields.map((field, i) => {
      return (
        <TextInput
          styles={styles}
          textTitle={field}
          handleInfo={this.handleInfo}
          key={i}
        />
      );
    });

    let customInput = this.state.customInput.map((field, i) => {
      return (
        <TextInput
          styles={styles}
          textTitle={field}
          handleInfo={this.handleInfo}
          key={i}
        />
      );
    });

    return (
      <div className="budget-main-container">
        {!this.state.submit && (
          <div className="budget-input-container">
            <div className="budget-indiv-container">
              <Rent handleRent={this.handleRent} />
            </div>
            <div className="budget-indiv-container">
              <Checkbox
                labelStyle={{ color: "black" }}
                iconStyle={{ fill: "black" }}
                label="Custom Rent/Gas/Utilities/Internet?"
                checked={this.state.customCheck}
                onClick={() => this.updateCheck()}
              />
            </div>
            <div className="budget-indiv-container">
              {this.state.customCheck && customInput}
            </div>
            <div className="budget-indiv-container">{inputFields}</div>

            <FlatButton
              style={style}
              label="SUBMIT"
              onClick={() => {
                this.handleSubmit();
              }}
            />
          </div>
        )}
        {this.state.submit && (
          <div>
            <Pie
              data={{
                labels: [
                  "Rent",
                  "Utilities",
                  "Internet",
                  "Gas",
                  "Groceries",
                  "Misc Expenditures",
                  "Expendable Income"
                ],
                datasets: [
                  {
                    data: [
                      Math.round(this.state.rent),
                      Math.round(this.state.utilities),
                      Math.round(this.state.internet),
                      Math.round(this.state.gas),
                      Math.round(this.state.groceries),
                      Math.round(this.state.misc),
                      Math.round(expendable)
                    ],
                    backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#C8CC92",
                      "#A07178",
                      "#776274",
                      "#3B7080"
                    ],
                    hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#C8CC92",
                      "#A07178",
                      "#776274",
                      "#3B7080"
                    ]
                  }
                ]
              }}
            />
            <FlatButton
              style={style}
              label="REDO"
              onClick={() => {
                this.handleRedo();
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
