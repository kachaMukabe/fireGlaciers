import React, { Component } from "react";
import Forecast from "./weather_forecast";
import { MosquitoGauge } from "./MosquitoGauge";
import { About } from "./aboutPage";
import "../../client/index.scss";
import MainHeader from "./header";
import { Footer } from "./footer.jsx";
import { MapView } from "./map_view";

class App extends Component {
  render() {
    return (
      <div id="AppJs">
        <div>
          <MainHeader />
          <Forecast />
        </div>
        <MosquitoGauge />
        <MapView />
         <About />
        <Footer />
      </div>
    );
  }
}

export default App;
