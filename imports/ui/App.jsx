import React from 'react';
import {Forecast} from "./mosquitoForecast";
import { HomepageHead } from "./_homepageHead.jsx"
import { AboutCards } from "./_aboutCards.jsx"
import { SearchInput } from "./_searchInput.jsx"

const App = () => (
  <div>
    <Forecast />
    <HomepageHead/>
    <AboutCards/>
    <SearchInput/>
  </div>
);

export default App;
