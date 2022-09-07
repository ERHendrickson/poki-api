import React, {useState} from 'react'

const Pokemon = () => {
    
    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then( (response) => {
                return response.json();
            })
            .then(response => {
                console.log(response);
                setPokemon(response.results);
            })
            .catch(err=>{
                console.log(err);
            })
    }
    
    return (
        <>
        <button onClick={fetchPokemon}>Fetch Pokemon</button>
        {
            pokemon.map((poke, i) => {
                return (
                    <div key={i}>
                        <ul>
                            <li>{poke.name}</li>
                        </ul>
                    </div>
                )
            })
        }
        </>
    )
}

export default Pokemon