import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  }
  handleChange = () => {
    this.setState({ working: !this.state.working });

  }

  render() {
    const changeText = this.state.working ? "Homer's working" : "Homer is tired";
    const currentLogo = this.state.working ? "App-logo" : "logoRotation";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={currentLogo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>

          <button
            onClick={this.handleChange}
          >{changeText}
          </button>

        </header>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
        <Quotes />
        <Lamp /*on*/ /*'on' est un props parent transmis au composant Lamp
        Utilisation caduque par utilisation du state dans composant Lamp*/ />
        <Lamp />

      </div>
    );
  }
}


export default App;