import React, {Component} from 'react';

class Forecast extends Component {
	constructor(props){
    super(props);
    this.state = {
			temperature: undefined,
  		city: undefined,
  		country: undefined,
  		humidity: undefined,
			description: undefined,
			wind: undefined
    }
  }

	componentDidMount(){
		this.getWeather()
	}

	getWeather = async () => {
		var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
	  const api_call = await fetch(proxyUrl + 'https://parasitesapi.herokuapp.com/api/v2/forecast/Lusaka');
	  const response = await api_call.json();
	  console.log(response);
		this.setState({
		  temperature: response.list[0].main.temp,
		  city: response.city.name,
		  country: response.city.country,
		  humidity: response.list[0].main.humidity,
			description: response.list[0].weather[0].description,
			wind: response.list[0].wind.speed
		})
	}

   render() {
    return (
			<div>
	      <p>Location: {this.state.city}, {this.state.country}</p>
	      <p>Temperature: {this.state.temperature}</p>
				<p>Humidity: {this.state.humidity}</p>
				<p>Description: {this.state.description}</p>
	      <p>Wind: {this.state.wind}</p>
	    </div>
    )
  }
}

export default Forecast;
