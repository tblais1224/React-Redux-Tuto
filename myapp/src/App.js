import React, { Component } from 'react';
import Pokemon from './pokemon';
import AddPokemon from './addPokemon';

class App extends Component {

  state = {
    pokemon: [
      { name: "Bulbasaur", lvl: 22, move: 'razor leaf', id: 1 },
      { name: "Squirtle", lvl: 24, move: 'water gun', id: 2 },
      { name: "Charmander", lvl: 30, move: 'flamethrower', id: 3 }
    ]
  }
  //cannot directly alter original state array
  //this.state.pokemon.push will not work here
  addPokemon = (pokemon) => {
    //adds random id to the new pokemon
    pokemon.id = Math.random();
    //make a copy of state that is a seperate entity, and add new pokemon
    //spread operator
    let pokemonSpread = [...this.state.pokemon, pokemon];
    this.setState({
      pokemon: pokemonSpread
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Tom's first React app!!!</h1>
        <p>Welcome Strangers</p>
        <Pokemon  pokemon={this.state.pokemon}/>
        <AddPokemon addPokemon={this.addPokemon}/>
      </div>
      
    );
  }
}

export default App;