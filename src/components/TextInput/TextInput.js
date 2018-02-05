import React, { Component } from 'react';
import TextField from "material-ui/TextField";


const TextInput = (props) => {
    return (
        <div>
            <TextField
                floatingLabelText={props.textTitle}
                onChange={e => {
                    props.handleInfo(props.textTitle, e.target.value);
                }}
            />
        </div>
    )
}

export default TextInput;