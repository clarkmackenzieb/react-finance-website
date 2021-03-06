import React, { Component } from "react";
import axios from "axios";
import FlatButton from "material-ui/FlatButton";
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

import TextInput from "../TextInput/TextInput";
import "./Income.css";

export default class Income extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: 0,
      state: "",
      filingStatus: 0,
      taxInfo: "",
      sections: ["Income", "State", "Filing Status"]
    };
    this.computeTax = this.computeTax.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //Toss in a few buttons, one to compute data, one to move to next page that only appears after the graph is made

  computeTax(income, statePick, filing) {
    axios
      .post("/api/incomeTax", {
        income,
        statePick,
        filing
      })
      .then(response => {
        this.setState({ taxInfo: response.data });
      })
      .catch(err => console.log(err));
  }

  handleChange(section, val) {
    if (section === "Filing Status") {
      section = "filingStatus";
      val = parseInt(val, 10);
    } else {
      section = section.toLowerCase();
    }
    this.setState({ [section]: val });
  }

  render() {
    const style = {
      marginTop: "20px",
      backgroundColor: "#FFF200",
      color: "black",
      fontFamily: "VT323",
      fontSize: "35px",
      border: "black 3px solid"
    };
    const styles = {
      floatingLabelFocusStyle: {
        color: "black"
      },
      underlineStyle: {
        borderColor: "black"
      }
    };
    let inputFields = this.state.sections.map((section, i) => {
      return (
        <TextInput
          styles={styles}
          textTitle={section}
          handleInfo={this.handleChange}
          key={i}
        />
      );
    });

    return (
      // flex wrap the p tags so they sit to the right of the input boxes
      <div className="income-container">
        <div className="income-text-fields">
          <h1 className="vt-font">Income</h1>
          {inputFields}
          <div className="pt-sans-font">
            <p>Income: $50,000 = 50000</p>
            <br />
            <p>State: Tennessee = TN</p>
            <br />
            <p>Filing Status:</p>
            <p>1 - Single;</p>
            <p>2 - Married, Filing Jointly;</p>
            <p>3 - Married, Filing Seperately;</p>
            <p>4 - Head of Household; </p>
          </div>
          <FlatButton
            className="income-button"
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
              <FlatButton style={style} label="Make a Budget" />
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
                  backgroundColor: ["#54A759", "#116416", "#004304"],
                  hoverBackgroundColor: ["#54A759", "#116416", "#004304"]
                }
              ]
            }}
          />
        )}
      </div>
    );
  }
}
