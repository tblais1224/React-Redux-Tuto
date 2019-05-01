import React from 'react';


const Pokemon = ({ pokemon }) => {

    // const pokemonList = pokemon.map(pokemon => {
    //     if(pokemon.lvl >= 24){

    //     return (
    //         <div className="pokemon" key={pokemon.id}>
    //             <div>Name: {pokemon.name}</div>
    //             <div>lvl: {pokemon.lvl}</div>
    //             <div>move: {pokemon.move}</div>
    //         </div>
    //     )} else {
    //         return (<div>no eligible pokemon</div>)
    //     }
    // })

    return (
        <div className="pokemon-list">
            {
                pokemon.map(pokemon => {
                    //ternary operator
                    return pokemon.lvl > 28 ? (
                        <div className="pokemon" key={pokemon.id}>
                            <div>Name: {pokemon.name}</div>
                            <div>lvl: {pokemon.lvl}</div>
                            <div>move: {pokemon.move}</div>
                        </div>
                    ) : null;
                })
            }
        </div>
    )
}


export default Pokemon