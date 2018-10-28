import React, { Component } from "react";

export class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row" id="aboutSection">
        <p align="center">
          Did you know that mosquitoes kill 725 000 people each year?
          Most of these deaths are caused by malaria, a disease caused
          by the female anopheles mosquito. This makes it one of the
          most deadly animals on the planet. Did you also know that
          mosquitoes' activity are affected by temperature? They thrive
          in warmer conditions and have a much higher chance of survival.
          It is a cause for concern especially with phenemenon such as
          climate change which may increase the number of mosquitoes and
          how prevalent they are throughout the year. Should we begin to
          worry about the mosquito's death toll rising in the coming years?
        </p>
        <p align="center">
          We would like to add an additional layer to the prevention
          and protection against disease. And even though we are
          centered around mosquitoes, we want to grow and span various
          other transmitters, agents and carriers of disease.
          The idea behind MosquitoCast is to be able to predict
          how not just moquitoes, but also other organisms
          would respond to changes in the environment. This may be caused
          by increased temperature, change in rain patterns etc. By showing
					these predictions, we believe the public can adequately prepare
					and protect themselves depending on the activity of said disease
					carriers.
        </p>
        <p align="center">
          We get our weather data from Open Weather Map and the
          models on how temperature affects mosquito activity
          from a research paper by Lindsay M. Beck-Johnson et al.
          The paper can found on the PLOS ONE jounal website
          <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0079276#pone-0079276-g002" > here</a>
        </p>
        <p align="center">
          The parasites are a small team of people who are concerned
          with people's health and how our changing environment can
          affect our health, especially in ways that are not always
          obvious. We believe we can help improve the way government
          bodies, organisations, and regular people take measures to
          protect their health and help spread awareness as to how
          climate change can pose higher risks to their health.
        </p>
      </div>
    );
  }
}
