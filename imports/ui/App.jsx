import React, { Component } from "react";
import Forecast from "./weather_forecast";
import { MosquitoActivityGauge } from "./mosquito_activity_gauge";
import { About } from "./about";
import "../../client/index.scss";
import MainHeader from "./top_header";
import { Footer } from "./footer.jsx";
import { MapView } from "./map_view";
import { SectionTitle } from "./section_title.jsx";

class App extends Component {
  render() {
    return (
      <div id="AppJs">
        <div>
          <MainHeader />
          <Forecast />
        </div>
        <SectionTitle Heading={"Mosquito activity"} />
        <MosquitoActivityGauge />
        <SectionTitle Heading={"Map view"} />
        <MapView />
        <SectionTitle Heading={"About MosquitoCast"} />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
