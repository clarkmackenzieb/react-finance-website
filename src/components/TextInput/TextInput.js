import React, { Component } from "react";
import TextField from "material-ui/TextField";

const TextInput = props => {
  let styles = props.styles;
  return (
    <div>
      <TextField
        id="text-field-id"
        styles={styles}
        underlineStyle={{
          color: "black"
        }}
        underlineFocusStyle={{
          color: "black"
        }}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        floatingLabelText={props.textTitle}
        onChange={e => {
          props.handleInfo(props.textTitle, e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
