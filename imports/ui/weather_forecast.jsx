import React, { Component } from "react";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      wind: undefined
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
    this.setState({
      temperature: response.list[0].main.temp,
      city: response.city.name,
      country: response.city.country,
      humidity: response.list[0].main.humidity,
      description: response.list[0].weather[0].description,
      wind: response.list[0].wind.speed
    });
  };

  render() {
    return (
      <div>
        {/* <img className="bg-image" src={"/imagebg.png"} alt="bg-image" /> */}
        <div className="weather-display .container-fluid">
          <div className="city-and-desc">
            <p className="city-name">{this.state.city}</p>
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
              <p>Humidity : {this.state.humidity} Km/h</p>
              <p>Wind : {this.state.wind} &#37;</p>
            </div>
          </div>

          <div className="weekly-forecast">
            <div>
              <p className="day-name">Mon</p>
              <img src="/images/sun.png" alt="sun" height={50} width={50} />
              <p className="day-temp">
                30
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Tue</p>
              <img src="/images/cloudy.png" alt="sun" height={50} width={60} />
              <p className="day-temp">
                30
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Wed</p>
              <img src="/images/cloudy.png" alt="sun" height={50} width={60} />
              <p className="day-temp">
                30
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Thu</p>
              <img src="/images/cloudy.png" alt="sun" height={50} width={60} />
              <p className="day-temp">
                30
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Fri</p>
              <img src="/images/sun.png" alt="sun" height={50} width={50} />
              <p className="day-temp">
                30
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Sat</p>
              <img src="/images/sun.png" alt="sun" height={50} width={50} />
              <p className="day-temp">
                30
                <sup>&#8451;</sup>
              </p>
            </div>
            <div>
              <p className="day-name">Sun</p>
              <img src="/images/sun.png" alt="sun" height={50} width={50} />
              <p className="day-temp">
                30
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
