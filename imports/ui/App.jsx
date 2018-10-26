import React from 'react';
import {Forecast} from "./mosquitoForecast";
import { MosquitoGauge } from "./MosquitoGauage";
import { AboutCards } from "./_aboutCards.jsx";
import { SearchInput } from "./_searchInput.jsx";
import { Graphs } from "./mosquito_Graphs.jsx";
import { NavigationBar } from "./navigation_bar.jsx";
import "../../client/index.scss";

const App = () => (
  <div>
    <Forecast />
    <MosquitoGauge/>
    <AboutCards />
    <SearchInput />
    <Graphs />
  </div>
);

export default App;
