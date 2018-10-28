import React, { Component } from "react";

export class ComponentHeading extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="componentHeading" className="row">
        <h4 style={{ marginBottom: 0 }}>{this.props.Heading}</h4>
      </div>
    );
  }
}
