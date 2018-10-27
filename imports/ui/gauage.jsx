import React, { Component } from "react";
import Gauge from "react-svg-gauge";

export default class Gaug extends Component {
                 constructor(props) {
                   super(props);
                    value : 50
                 }

                 render() {
                   return <div>
                       <Gauge value={this.state.value} width={400} height={320} label="This is my Gauge" />
                     </div>;
                 }
               }
