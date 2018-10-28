import React, { Component } from "react";
import gauge from "./gauge";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

export class MosquitoActivityGauge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined
    };
  }
  componentWillMount() {
    this.changeLevel();
    gauge();
  }

  changeLevel = async () => {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const api_call = await fetch(
      proxyUrl + "https://parasitesapi.herokuapp.com/api/v2/forecast/Lusaka"
    );
    var response = await api_call.json();
    Tracker.autorun(() => {
      this.setState({
        temperature: response.list[0].main.temp
      });
    });
  };

  render() {
    return (
      <div id="MosquitoGauge">
        <div class="container">
          <div
            class="progress-pie-chart"
            data-percent={`${this.state.temperature}`}
          >
            <div class="ppc-progress">
              <div class="ppc-progress-fill" />
            </div>
            <div class="ppc-percents">
              <div class="pcc-percents-wrapper">
                <span />
              </div>
            </div>
          </div>
          <div className="current-m-Activity row">
            <p style={{ fontSize: 20 + "px" }}>
              Current Mosquito activity in your area
            </p>
          </div>

          <div class="simple-hr">
            <ul className="list-unstyled">
              <li>
                <p style={{ fontWeight: "bold" }}>Normal</p>
              </li>
              <li>
                <hr class="square1" />
              </li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <p style={{ fontWeight: "bold" }}>Meduim</p>
              </li>
              <li>
                {" "}
                <hr class="square2" />
              </li>
            </ul>
            <ul className="list-unstyled">
              <li>
                <p style={{ fontWeight: "bold" }}>High</p>
              </li>
              <li>
                <hr class="square3" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
