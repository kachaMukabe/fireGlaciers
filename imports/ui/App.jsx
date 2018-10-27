import React, { Component } from "react";
import Forecast from "./weather_forecast";
import { MosquitoGauge } from "./MosquitoGauage";
import { HomepageHead } from "./_homepageHead.jsx";
import { About } from "./aboutPage";
import { SearchInput } from "./_searchInput.jsx";
import "../../client/index.scss";
import { Footer } from "./footer.jsx"; 

class App extends Component {
  render() {
    return <div id="AppJs">
        <Forecast />
        <MosquitoGauge />
        <HomepageHead />
        <About />
        <Footer />
      </div>;
  }
}

export default App;
