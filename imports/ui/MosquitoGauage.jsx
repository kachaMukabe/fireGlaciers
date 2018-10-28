import React, { Component } from "react";
import gauge from "./gauage .js";

export class MosquitoGauge extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    gauge();
  }

  render() {
    return (
      <div id="MosquitoGauge">
        <div class="container">
          <div class="progress-pie-chart" data-percent="200">
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
