
import { useState, useEffect } from "react";
import { getPokemon } from "../../app/services/service";

const GetAxioCompo = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        getPokemon().then(pokemons => {

            setName(pokemons.data.results)
        });
    }, [])

    return (
        <div>
            {name.map(pokemon => <p key={pokemon.id}> {pokemon.name} </p>)}
        </div>
    )
}
export default GetAxioCompo;