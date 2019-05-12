import React from "react";
import "./../App.css";
import FormInput from "./formInput";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.call_data} className="form">
        <FormInput value="City" />
        <FormInput value="Country" />
        <button className="btn" align="center">
          Check weather
        </button>
      </form>
    );
  }
}

export default Form;
