import React, { Component } from "react";
import axios from "axios";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

import "./Income.css";

export default class Income extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: 0,
      state: "",
      filingStatus: 0,
      taxInfo: ""
    };
    this.computeTax = this.computeTax.bind(this);
  }

  //Toss in a few buttons, one to compute data, one to move to next page that only appears after the graph is made

  computeTax(income, statePick, filing) {
    axios
      .post("http://localhost:3005/api/incomeTax", {
        income,
        statePick,
        filing
      })
      .then(response => {
        this.setState({ taxInfo: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const style = {
      backgroundColor: "#FFF200",
      color: "black",
      fontFamily: "VT323",
      fontSize: "35px",
      border: "black 3px solid"
    };
    return (
      // flex wrap the p tags so they sit to the right of the input boxes
      <div className="income-container">
        <div className="income-text-fields">
          <h1 className="vt-font">Income Reuse Text Field Component from Budget to make this cleaner</h1>
          <TextField
            className="pt-sans-font"
            hintText="50000"
            errorText="This field is required"
            floatingLabelText="Income"
            onChange={(e, newValue) => {
              this.setState({ income: parseInt(newValue, 10) });
            }}
          />
          <div className="pt-sans-font">
            <p>Income Data</p>
            <p> (ex $50,000 = 50000)</p>
          </div>
          <br />
          <TextField
            className="pt-sans-font"
            hintText="TN, CA, NY"
            errorText="This field is required"
            floatingLabelText="State"
            onChange={(e, newValue) => {
              this.setState({ state: newValue });
            }}
          />
          <div className="pt-sans-font">
            <p>State Abbreviation:</p>
            <p>Tennessee: TN, California: CA, etc.</p>
          </div>
          <br />
          <TextField
            className="pt-sans-font"
            hintText="1,2,3"
            errorText="This field is required"
            floatingLabelText="Filing Status"
            onChange={(e, newValue) => {
              this.setState({ filingStatus: parseInt(newValue, 10) });
            }}
          />
          <div className="pt-sans-font">
            <p>Filing Status:</p>
            <p>1 - Single;</p>
            <p>2 - Married, Filing Jointly;</p>
            <p>3 - Married, Filing Seperately;</p>
            <p>4 - Head of Household; </p>
          </div>
          <FlatButton
            style={style}
            label="CALCULATE"
            onClick={() => {
              this.computeTax(
                this.state.income,
                this.state.state,
                this.state.filingStatus
              );
            }}
          />
          <br />
          {this.state.taxInfo && (
            <Link to="/budget">
              <FlatButton label="Make a Budget" />
            </Link>
          )}
        </div>
        {this.state.taxInfo && (
          <Pie
            height={70}
            width={150}
            data={{
              labels: ["Federal", "State", "FICA"],
              datasets: [
                {
                  data: [
                    this.state.taxInfo.annual.federal.amount,
                    this.state.taxInfo.annual.state.amount,
                    this.state.taxInfo.annual.fica.amount
                  ],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                  hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                }
              ]
            }}
          />
        )}



      </div>
    );
  }
}
