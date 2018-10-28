import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';

export class MapView extends Component {
    static defaultProps = {
        // if(_getLocation)
        // {
        //     center: {
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude
        //     }
        // }else {

        // }
        center: {
            lat: -15.457484800000001,
            lng: 28.347596799999998
        },
        zoom: 11
    };

    _getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this._showPosition);
            return true;
        } else {
            alert("Geolocation is not supported by this browser.");
            return false;
        }
    }

    _showPosition = (position) => {
        newCenter = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        // alert(newCenter);
        // alert(position.coords.latitude);
        // alert( position.coords.longitude);
    }

    render() {
        this._getLocation();
        return (
            <div style ={{ height: '400px', width: '100%', marginTop: 60}}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyB6ZEEskxcCC2TCNttrxOhuxlc6PjwQvAE',
                        language: 'en'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >

                </GoogleMapReact>
            </div>
        );
    }
}

//export default MapView;
