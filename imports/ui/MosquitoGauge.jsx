import React, { Component } from "react";
import Gauge from "./gauge";
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

export class MosquitoGauge extends Component {
constructor(props){
  super(props);
	this.state = {
		temperature: undefined,
		percent: this.changeLevel()
	}
}
	componentWillMount(){
		this.changeLevel()
		this.getLevel()
		Gauge()
	}

	changeLevel = async () => {
		var proxyUrl = "https://cors-anywhere.herokuapp.com/";
		const api_call = await fetch(
			proxyUrl + "https://parasitesapi.herokuapp.com/api/v2/forecast/Lusaka"
		);
		var response = await api_call.json();
		this.setState({
			temperature: response.list[0].main.temp
		})
		if (this.state.temperature > 16) {
			this.setState({
				percent: 30
			})
		}
		else if (this.state.temperature > 24) {
			this.setState({
				percent: 50
			})
		}
		else if (this.state.temperature > 28) {
			this.setState({
				percent: 80
			})
		}
		else if (this.state.temperature > 32) {
			this.setState({
				percent: 5
			})
		}
	}

  getLevel=()=>{
		Tracker.autorun(()=>{
			this.changeLevel()
			alert(this.state.percent)
 		})
	}

  render() {
    return <div id="MosquitoGauge">
			<div className="container" style={{textAlign: 'center', marginTop: 60}}>
				<h4>Mosquito Activity</h4>
			</div>
          <div className="container">
            <div className="progress-pie-chart" data-percent={`${this.state.percent}`}>
              <div className="ppc-progress">
                <div className="ppc-progress-fill" />
              </div>
              <div className="ppc-percents">
                <div className="pcc-percents-wrapper">
                 <span></span>
                </div>
              </div>
            </div>
						<div className="container" style={{textAlign: 'center', marginTop: 19}}>
							<p>Current Mosquito activity in your area</p>
						</div>
            <div className="simple-hr">
              <p>Normal</p>
              <hr className="square1"/>
              <p>Meduim</p>
              <hr className="square2"/>
              <p>High</p>
              <hr className="square3"/>
          </div>
          </div>
        </div>;
  }
}
