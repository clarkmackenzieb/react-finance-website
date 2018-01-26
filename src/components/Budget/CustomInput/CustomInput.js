import React, { Component } from 'react';

import TextField from "material-ui/TextField";

import "./CustomInput.css";

export default class CustomInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputFields: [
                "Rent",
                "Gas",
                "Internet",
                "Utilities"
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Custom Input</h1>
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
            </div>
        )
    }
}