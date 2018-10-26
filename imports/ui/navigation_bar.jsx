import React, { Component } from "react";
import { Menu } from "./_homePageHeadAnimation.js";

export class NavigationBar extends Component {
    constructor() {
        super()

    }
componentMount(){
    Menu();
}

    render() {
        return (
            <nav class="navbar navbar-dark bg-primary">
            <div>
              <button><i class="fas fa-bars" id='bars'></i><i class="fas fa-times" id='cross'></i>   </button>
                <div>
                </div>
                <ul class="menu">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul> 
                <h1 class="h1">Home</h1>
            </div>
             <h4 style={{justifyContent:'center'}}>The Parasites</h4>
            </nav>
        )
    }
}