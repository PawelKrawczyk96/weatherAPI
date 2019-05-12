import React from "react";
import "./../App.css";

class App_date extends React.Component {
  state = {
    day: undefined,
    month: undefined,
    year: undefined
  };

  today = () => {
    let get_data = new Date();
    this.setState({
      day: get_data.getDay(),
      month: get_data.getDate(),
      year: get_data.getFullYear()
    });
    console.log(get_data);
  };

  componentDidMount() {
    this.today();
  }

  render() {
    return (
      <div className="date-today">
        <h2>
          {this.state.year}/{this.state.month < 10 && 0}
          {this.state.month}/{this.state.day < 10 && 0}
          {this.state.day}
        </h2>
      </div>
    );
  }
}

export default App_date;
