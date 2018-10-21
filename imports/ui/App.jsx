import React from 'react';
import {Forecast} from "./mosquitoForecast";
import { HomepageHead } from "./_homepageHead.jsx"
import { AboutCards } from "./_aboutCards.jsx"

const App = () => (
  <div>
    <Forecast />
    <HomepageHead/>
    <AboutCards/>
  </div>
);

export default App;
