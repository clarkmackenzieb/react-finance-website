import React, { Component } from "react";
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
      ],
      rentValue: 0
    };
    this.handleRentChange = this.handleRentChange.bind(this);
  }

  handleRentChange(val) {
    this.setState({ rentValue: val });
  }

  render() {
    return (
      <div>
        <h1 className="vt-font">Rent</h1>
        <DropDownMenu value={this.state.rentValue} onChange={this.handleRent}>
          {this.state.rentArea.map((rent, i) => (
            <MenuItem
              key={i}
              value={i}
              primaryText={rent}
              onClick={() => {
                this.props.handleRent(rent);
                this.handleRentChange(i);
              }}
            />
          ))}
        </DropDownMenu>
      </div>
    );
  }
}
