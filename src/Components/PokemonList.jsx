import { PokemonCard } from "./PokemonCard"

export const PokemonList = ({loading,newPokemonData}) => {


if(loading){
    return (
        <div className="container flex justify-center my-10">
            <div className="loader"></div>
        </div>
    )
}
    return (
        <div className="flex gap-6 items-center flex-wrap mb-14">
            {
                newPokemonData.map((pokemon) => {
                  return <PokemonCard key={pokemon.id} id={pokemon.id} pokemon={pokemon}/>
                   
                   
                })
            }


        </div>
    )
}