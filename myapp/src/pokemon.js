import React, { Component } from 'react';


class Pokemon extends Component {
    render(){
        const { pokemon } = this.props;
        const pokemonList = pokemon.map(pokemon => {
        
        return(
            <div className="pokemon" key={pokemon.id}>
                <div>Name: {pokemon.name}</div>
                <div>lvl: {pokemon.lvl}</div>
                <div>move: {pokemon.move}</div>
            </div>
        )
        })
        return(
            <div className="pokemon-list">
                {pokemonList}
            </div>
        )
    }
}

export default Pokemon