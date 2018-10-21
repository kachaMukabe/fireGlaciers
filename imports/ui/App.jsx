import React from 'react';
import {Forecast} from "./mosquitoForecast";
import { HomepageHead } from "./_homepageHead.jsx"

const App = () => (
  <div>
    <Forecast />
    <HomepageHead/>
  </div>
);

export default App;
