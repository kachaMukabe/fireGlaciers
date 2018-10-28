import React, { Component } from "react";
var moment = require("moment");

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      wind: undefined,
      weekForecast: {
        mon: "",
        tue: "",
        wed: "",
        thu: "",
        fri: "",
        sat: "",
        sun: ""
      }
    };
  }

  componentDidMount() {
    this._getWeather();
  }

  _getWeather = async () => {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const api_call = await fetch(
      proxyUrl + "https://parasitesapi.herokuapp.com/api/v2/forecast/Lusaka"
    );
    const response = await api_call.json();
    console.log(response);
    response.list.map(tmpObj => {
      const momentday = moment.unix(tmpObj.dt);
      const apiHour = new Date().getHours();
      const hour = new Date().getHours();
      console.log(momentday.day());

      switch (momentday.day()) {
        case 0:
          if (hour === apiHour) {
            this.setState(prevState => ({
              weekForecast: { ...prevState.weekForecast, sun: tmpObj.main.temp }
            }));
          }
          break;
        case 1:
          console.log("tuesday");
          if (hour === apiHour) {
            this.setState(prevState => ({
              weekForecast: { ...prevState.weekForecast, mon: tmpObj.main.temp }
            }));
          }
          break;
        case 2:
          if (hour === apiHour) {
            this.setState(prevState => ({
              weekForecast: { ...prevState.weekForecast, tue: tmpObj.main.temp }
            }));
          }
          break;
        case 3:
          if (hour === apiHour) {
            this.setState(prevState => ({
              weekForecast: { ...prevState.weekForecast, wed: tmpObj.main.temp }
            }));
          }
          break;
        case 4:
          if (hour === apiHour) {
            this.setState(prevState => ({
              weekForecast: { ...prevState.weekForecast, thu: tmpObj.main.temp }
            }));
          }
          break;
        case 5:
          if (hour === apiHour) {
            this.setState(prevState => ({
              weekForecast: { ...prevState.weekForecast, fri: tmpObj.main.temp }
            }));
          }
          break;
        case 6:
          if (hour === apiHour) {
            this.setState(prevState => ({
              weekForecast: { ...prevState.weekForecast, sat: tmpObj.main.temp }
            }));
          }
          break;
        default:
      }
    });

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const dayNumber = moment.unix(response.list[0].dt).day();
    this.setState({
      temperature: response.list[0].main.temp,
      city: response.city.name,
      country: response.city.country,
      humidity: response.list[0].main.humidity,
      description: response.list[0].weather[0].description,
      wind: response.list[0].wind.speed,
      date: days[dayNumber]
    });
  };
  render() {
    console.log(this.state.weekForecast);
    return (
      <div>
        {/* <img className="bg-image" src={"/imagebg.png"} alt="bg-image" /> */}
        <div className="weather-display .container-fluid">
          <div className="city-and-desc">
            <p className="city-name">{this.state.city}</p>
            <p className="temp-description">{this.state.date}</p>
            <p className="temp-description">{this.state.description}</p>
          </div>

          <div className="temp-and-humidr">
            <p className="temp">
              <span style={{ margin: 20 }}>
                <img src="/images/sun.png" alt="sun" height={50} width={50} />
              </span>
              {this.state.temperature} <sup>&#8451;</sup>
            </p>
            <div className="humid">
              <p>Humidity : {this.state.humidity} &#37;</p>
              <p>Wind : {this.state.wind} m/s</p>
            </div>
          </div>

          <div className="weekly-forecast">
            <div>
              <p className="day-name">Mon</p>
              <img src="/images/sun.png" alt="sun" height={50} width={50} />
              <p className="day-temp">
                {this.state.weekForecast.mon}
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Tue</p>
              <img src="/images/cloudy.png" alt="sun" height={50} width={60} />
              <p className="day-temp">
                {this.state.weekForecast.tue}
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Wed</p>
              <img src="/images/cloudy.png" alt="sun" height={50} width={60} />
              <p className="day-temp">
                {this.state.weekForecast.wed}
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Thu</p>
              <img src="/images/cloudy.png" alt="sun" height={50} width={60} />
              <p className="day-temp">
                {this.state.weekForecast.thu}
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Fri</p>
              <img src="/images/sun.png" alt="sun" height={50} width={50} />
              <p className="day-temp">
                {this.state.weekForecast.fri}
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Sat</p>
              <img src="/images/sun.png" alt="sun" height={50} width={50} />
              <p className="day-temp">
                {this.state.weekForecast.sat}
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Sun</p>
              <img src="/images/sun.png" alt="sun" height={50} width={50} />
              <p className="day-temp">
                {this.state.weekForecast.sun}
                <sup>&#8451;</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
