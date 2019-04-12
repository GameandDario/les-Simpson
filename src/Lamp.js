import React, { Component } from 'react';

class Lamp extends Component {
    constructor(props) { /*initialisation du state */
    super(props);
    this.state = {
      on: props.on
    };
  }
  handleClick = () => {
    /*console.log('Button clicked') affiche message dans console = bouton bien relié
     à fonction handleClick;*/
    this.setState({ on: !this.state.on });
  };
  
  render() /*le render lie la structure visuelle au condition du state */ {
    const light = this.state.on ? 'on' : 'off';
    return /*le return renvoit la structure visuelle */(
      <div className="Lamp">
        <button onClick={this.handleClick} className={light}>
        {light.toUpperCase()}</button>{/*Interrupteur*/}
        <figure className={light} />{/*Ampoule */}
      </div>
    );
  }
}

export default Lamp;
