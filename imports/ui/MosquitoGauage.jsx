import React, { Component } from "react";
import Gauge from "./gauage .js";

export class MosquitoGauge extends Component {
constructor(){
    super()

}
componentWillMount(){
Gauge()
}

    render() {
      return <div id="MosquitoGauge">
            <div class="container">
              <div class="progress-pie-chart" data-percent="200">
                <div class="ppc-progress">
                  <div class="ppc-progress-fill" />
                </div>
                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                   <span></span>
                  </div>
                </div>
              </div>
              <div class="simple-hr">
                <p>Normal</p>
                <hr class="square1"/>
                <p>Meduim</p>
                <hr class="square2"/>
                <p>High</p>
                <hr class="square3"/>
            </div>
            </div>
          </div>;
    }
}
