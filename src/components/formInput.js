import React from "react";
import "./../App.css";

const FormInput = props => {
  return (
    <label className="inp">
      <input type="text" name={props.value} placeholder="&nbsp;" />
      <span className="label">{props.value}</span>
      <span className="border" />
    </label>
  );
};

export default FormInput;
