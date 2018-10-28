import React, { Component } from "react";
import Forecast from "./weather_forecast";
import { MosquitoGauge } from "./MosquitoGauge";
import { About } from "./aboutPage";
import "../../client/index.scss";
import MainHeader from "./header";
import { Footer } from "./footer.jsx";
import { MapView } from "./map_view";
import { ComponentHeading } from "./componentHead.jsx"

class App extends Component {
  render() {
    return <div id="AppJs">
        <div>
          <MainHeader />
          <Forecast />
        </div>
      <ComponentHeading Heading={"Mosquito activity"} />
        <MosquitoGauge />
      <ComponentHeading Heading={"Map view"}/>
        <MapView />
      <ComponentHeading Heading={"About MosquitoCast"} />
        <About />
        <Footer />
      </div>;
  }
}

export default App;
