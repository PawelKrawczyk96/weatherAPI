import React from "react";
import "./../App.css";
import App_date from "./App_date";

const Results = props => {
    return (
        <div className={`resaults ${props.display}`}>
            <header>{props.city}, Poland</header>
            <App_date />
            <div className="resaults-today">
                <img src={props.icon} alt="weather Icon" />
                <h1>{Math.floor(props.temperature)}&deg;</h1>
            </div>
            <section className="resaults-today-info">
                <h2>Wind: {props.wind}m/s</h2>
            </section>
        </div>
    );
};

export default Results;
