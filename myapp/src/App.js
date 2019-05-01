import React, { Component } from 'react';
import Pokemon from './pokemon';

class App extends Component {

  state = {
    pokemon: [
      { name: "Bulbasaur", lvl: 22, move: 'razor leaf', id: 1 },
      { name: "Squirtle", lvl: 24, move: 'water gun', id: 2 },
      { name: "Charmander", lvl: 30, move: 'flamethrower', id: 3 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Tom's first React app!!!</h1>
        <p>Welcome Strangers</p>
        <Pokemon  pokemon={this.state.pokemon}/>

      </div>
    );
  }
}

export default App;