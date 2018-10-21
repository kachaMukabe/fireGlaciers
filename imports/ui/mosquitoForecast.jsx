import React, { Component } from "react";


export class Forecast extends Component {

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            alert("Geolocation not supported");
        }
    }

    showPosition = (position) => {
        alert("Position: " + position.coords.latitude + ", " + position.coords.longitude)
    }

    render() {
        return (
            <div>
                {this.showPosition}
            </div>
        )
    }
}