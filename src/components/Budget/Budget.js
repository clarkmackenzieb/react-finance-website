import React, { Component } from "react";
import axios from "axios";

import Rent from "./Rent/Rent";
import InputFields from "./InputFields/InputFields";
import CustomInput from "./CustomInput/CustomInput";

import RaisedButton from "material-ui/RaisedButton";
import Checkbox from 'material-ui/Checkbox';
import { Pie } from "react-chartjs-2";

import "./Budget.css";

export default class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFields: [
        "Groceries",
        "Loans",
        "Savings",
        "Debt",
        "Misc Expenditures"
      ],
      rent: 0,
      utility: 0,
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
  }

  componentDidMount() {
    axios
      .get("/api/getTaxes")
      .then(response =>
        this.setState({
          taxes: response.data.taxInfo.annual,
          income: response.data.taxInfo.totalIncome
        })
      )
      .catch(err => console.log(err));
    axios
      .get("/api/getAvgPrices")
      .then(response =>
        this.setState({ utility: response.data.util, internet: response.data.internet, gas: response.data.gas })
      )
  }

  handleInfo(field, val) {
    switch (field) {
      case "Groceries":
        this.setState({ groceries: parseInt(val, 10) });
        break;
      case "Loans":
        this.setState({ loans: parseInt(val, 10) });
        break;
      case "Savings":
        this.setState({ savings: parseInt(val, 10) });
        break;
      case "Debt":
        this.setState({ debt: parseInt(val, 10) });
        break;
      case "Misc Expenditures":
        this.setState({ misc: parseInt(val, 10) });
        break;
      case "Rent":
        this.setState({ rent: parseInt(val, 10) })
        break;
      case "Gas":
        this.setState({ gas: parseInt(val, 10) })
        break;
      case "Internet":
        this.setState({ internet: parseInt(val, 10) })
        break;
      case "Utilities":
        this.setState({ utility: parseInt(val, 10) })
        break;
      default:
        return null;
    }
  }

  updateCheck() {
    this.setState({ customCheck: !this.state.customCheck })
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

  render() {
    return (
      <div>
        <Rent handleRent={this.handleRent} />
        <Checkbox
          label="Custom Rent/Gas/Utilities/Internet?"
          checked={this.state.customCheck}
          onClick={() => this.updateCheck()}
        />
        {this.state.customCheck && <CustomInput handleInfo={this.handleInfo} />}
        <InputFields
          handleSubmit={this.handleSubmit}
          handleInfo={this.handleInfo}
        />
        <h1>Add disposable income, investment resources, extra stuff</h1>
        {this.state.submit && (
          <Pie
            data={{
              labels: [
                "Rent",
                "Utility",
                "Internet",
                "Gas",
                "Groceries",
                "Misc Expenditures"
              ],
              datasets: [
                {
                  data: [
                    this.state.rent,
                    this.state.utility,
                    this.state.internet,
                    this.state.gas,
                    this.state.groceries,
                    this.state.misc
                  ],
                  backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#C8CC92",
                    "#A07178",
                    "#776274"
                  ],
                  hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#C8CC92",
                    "#A07178",
                    "#776274"
                  ]
                }
              ]
            }}
          />
        )}
      </div>
    );
  }
}
