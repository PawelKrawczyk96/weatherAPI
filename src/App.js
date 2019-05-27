import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Resaults from "./components/Reasults";
import APIdata from "./city.list.json";

const KEY = "bafda38e17e1f1bac4660e43794f3c77";
const Countries = [];
const weatherOptions = [
    {
        weather: "Clouds",
        icon_url: "./../images/cloud.svg"
    },
    {
        weather: "Clear",
        icon_url: "/images/sun.svg"
    },
    {
        weather: "Storm",
        icon_url: "/images/storm.svg"
    },
    {
        weather: "Rain",
        icon_url: "./../images/rain.svg"
    },
    {
        weather: "Haze",
        icon_url: "./../images/haze.svg"
    }
];

class App extends React.Component {
    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        wind: undefined,
        weather: undefined,
        display_header: "block",
        display_resaults: "none",
        error: false
    };
    Api_connect = async e => {
        e.preventDefault();
        const City = e.target.elements.City.value;
        const Country = e.target.elements.Country.value;

        const call = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&units=metric&APPID=${KEY}`
        );
        const data = await call.json();
        console.log(data);
        console.log(APIdata);

        if (data.cod === "404") {
            this.setState(prevState => ({
                error: true
            }));
            return;
        } else {
            this.setState(prevState => ({
                error: false
            }));
        }

        console.log(data.cod);

        // search type of weather for show correct layout
        let weather_option = weatherOptions.find(
            w => w.weather === data.weather[0].main
        );

        // assign data to state object
        this.setState({
            city: data.name,
            temperature: data.main.temp,
            weather: weather_option.weather,
            wind: data.wind.speed,
            icon_url: weather_option.icon_url,
            display_header: "none",
            display_resaults: "block"
        });
    };

    render() {
        return (
            <div className="root">
                <div className={`${this.state.weather}`}>
                    <div className="container">
                        <Header display={this.state.display_header} />
                        <Form call_data={this.Api_connect} />
                        {this.state.error && <h1>blad!</h1>}
                        <Resaults
                            display={this.state.display_resaults}
                            icon={this.state.icon_url}
                            city={this.state.city}
                            country={this.state.country}
                            temperature={this.state.temperature}
                            wind={this.state.wind}
                        />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
