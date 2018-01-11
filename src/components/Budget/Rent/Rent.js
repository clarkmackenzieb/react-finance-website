import React, { Component } from "react";
import axios from "axios";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";

export default class Rent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rentArea: [
        "City Center, 1 Bedroom",
        "City Center, 3 Bedroom",
        "Outer City, 1 Bedroom",
        "Outer City, 3 Bedroom",
        "No Rent Payment"
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Rent</h1>
        <DropDownMenu value={""} onChange={this.handleRent}>
          {this.state.rentArea.map((rent, i) => (
            <MenuItem
              key={i}
              value={i}
              primaryText={rent}
              onClick={() => {
                this.props.handleRent(rent);
              }}
            />
          ))}
        </DropDownMenu>
      </div>
    );
  }
}
