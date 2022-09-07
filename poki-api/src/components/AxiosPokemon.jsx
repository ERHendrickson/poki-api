import React, {useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const AxiosPokemon = () => {
    
    const [pokemon, setPokemon] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(()=> {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((response) => {
                console.log(response.data.results);
                //everytime a state variable changes, the component re-runs aka re-appears on the screen
                setPokemon(response.data.results);
            })
            .catch(err=>{
                console.log(err);
            })
    }, [clicked])
    
    return (
        <>
        {/* <button onClick={fetchPokemon}>Fetch Pokemon</button> */}
        <button onClick={() => {setClicked(!clicked)}}>Fetch Pokemon</button>
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

export default AxiosPokemon