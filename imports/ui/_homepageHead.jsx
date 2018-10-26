import React, { Component } from "react";
import Gauge from "./gauage .js";

export class HomepageHead extends Component {
constructor(){
    super()

}
componentWillMount(){
Gauge()
}

    render() {
        return <div id="homePageHead">
            <div class="container">
              <div class="progress-pie-chart" data-percent="90">
                <div class="ppc-progress">
                  <div class="ppc-progress-fill" />
                </div>
                <div class="ppc-percents">
                  <div class="pcc-percents-wrapper">
                    <span>%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>;
    }
}