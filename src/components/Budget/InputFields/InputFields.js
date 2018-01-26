import React, { Component } from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputFields: [
        "Groceries",
        "Loans",
        "Savings",
        "Debt",
        "Misc Expenditures"
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>InputFields</h1>
        {this.state.inputFields.map((field, i) => {
          return (
            <div key={i}>
              <TextField
                hintText="ex. 100"
                floatingLabelText={`${field} (Monthly)`}
                onChange={e => {
                  this.props.handleInfo(field, e.target.value);
                }}
              />
              <br />
            </div>
          );
        })}

        <RaisedButton
          label="Submit"
          primary={true}
          onClick={() => this.props.handleSubmit()}
        />
      </div>
    );
  }
}
