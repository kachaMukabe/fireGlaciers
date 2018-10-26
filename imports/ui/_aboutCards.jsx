import React, { Component } from "react";


export class AboutCards extends Component {
    constructor() {
        super()

    }


    render() {
        return (
            <div id="aboutSection">
                <div class="aboutCard card bg-light">
                    <div class="card-body text-center">
                        <p class="card-text">Global warming and </p>
                    </div>
                </div>
                <div class=" aboutCard card bg-light">
                    <div class="card-body text-center">
                        <p class="card-text">Some text inside the fifth card</p>
                    </div>
                </div>
                <div class="aboutCard card bg-light">
                    <div class="card-body text-center">
                        <p class="card-text">Some text inside the fifth card</p>
                    </div>
                </div>
            </div>
        )
    }
}