import React from 'react';


const Pokemon = ({ pokemon }) => {
    const pokemonList = pokemon.map(pokemon => {
        if (pokemon.lvl > 22 ) {
            return (
                <div className='pokemon' key={pokemon.id}>
                    <div>name: {pokemon.name}</div>
                    <div>lvl: {pokemon.lvl}</div>
                    <div>Move: {pokemon.move}</div>
                    <br/>
                </div>
            )
        } else {
            return null
        }
    })
    return (
        <div className="pokemon-list">
            {pokemonList}
        </div>
    )
}


export default Pokemon