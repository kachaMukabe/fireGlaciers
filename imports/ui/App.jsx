import React, { Component } from "react";
import Forecast from "./weather_forecast";
import { MosquitoGauge } from "./MosquitoGauage";
import { HomepageHead } from "./_homepageHead.jsx";
import { AboutCards } from "./_aboutCards.jsx";
import { SearchInput } from "./_searchInput.jsx";
import "../../client/index.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Forecast />
        <MosquitoGauge/>
        <HomepageHead />
        <AboutCards />
        <SearchInput />
      </div>
    );
  }
}

export default App;
