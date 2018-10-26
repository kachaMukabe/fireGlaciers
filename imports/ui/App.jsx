import React from 'react';
import {Forecast} from "./mosquitoForecast";
import { HomepageHead } from "./_homepageHead.jsx"
import { AboutCards } from "./_aboutCards.jsx"
import { SearchInput } from "./_searchInput.jsx"
import { Graphs } from "./mosquito_Graphs.jsx"
import { NavigationBar } from "./navigation_bar.jsx"

const App = () => (
  <div>
    <Forecast />
    <HomepageHead/>
    <AboutCards/>
    <SearchInput/>
    <Graphs/>
  </div>
);

export default App;
