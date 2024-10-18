import { useEffect, useState } from "react"
import { CatchPokemon } from "./CatchPokemon";
import { PokemonList } from "./PokemonList";



export const Pokemon = () => {

    // stroe pokemon data
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const[newPokemonData,setNewData] = useState([])
    


    // // fetching pokemkn data 
    const fetchPokemonData = async () => {
        let apiurl = `https://pokeapi.co/api/v2/pokemon?limit=27`
        try {
            const response = await fetch(apiurl);
            const data = await response.json();
            const pokemons = data.results;
            let detailedData = pokemons.map(async (pokemon) => {
                let res = await fetch(pokemon.url);
                let data = await res.json();
                return data;



            })
            let pokemonDetailedData = await Promise.all(detailedData);
            setPokemonData(pokemonDetailedData)
            setNewData(pokemonDetailedData)





        } catch (error) {
            setErrorMsg(error)
            setPokemonData(null)
            setNewData(null)
        }
    }

    // // end 
    
    // check input value in pokemon data
    const searchPokemon = (value) =>{
        
        if(value){
            let newPokemonData = [...pokemonData];
            newPokemonData = newPokemonData.filter((pokemon) =>{
            return pokemon.name.toLowerCase().includes(value.toLowerCase())
            })
           setNewData(newPokemonData)
            
        }
      
        
      
        
    }
    // end 
    

    // handle api fetching side effect 
    useEffect(() => {
        fetchPokemonData()
        setLoading(false)
    }, [])
    // end 
    

    return (
        <div className="container">
            <CatchPokemon  searchPokemon={searchPokemon}/>
           {newPokemonData? <PokemonList  newPokemonData={newPokemonData}  loading={loading}/>:<h2 className="text-xl">{errorMsg.message}</h2>} 
        </div>
    )

}