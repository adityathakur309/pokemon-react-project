export const PokemonCard = ({ pokemon, id }) => {


    return (
        <div
            className="card grow basis-80 bg-white rounde-lg overflow-hidden"
            id={`card${id}`}
        >
            <div className="flex items-center flex-col gap-4 p-6">
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    className="block mx-auto w-40 h-40 object-contain animate-pulse"
                    alt=""
                />
                <h2 className="text-2xl font-bold text-gray-800 capitalize transition duration-300 hover:text-green-600">
                    {pokemon.name}
                </h2>
                <h3 className="text-xl bg-green-500 text-white rounded-full px-5 py-2 text-center shadow-md animate-bounce">
                    {`${pokemon.types[0].type.name} ${pokemon.types[1] ? pokemon.types[1].type.name : ""}`}
                </h3>
            </div>

            <div className="flex flex-wrap justify-between gap-4 p-4 border-t border-gray-200">
                <h3 className="text-lg basis-4 grow bg-green-500 text-white p-2 rounded text-center text-gray-700">
                    {`Height: ${pokemon.height}`}
                </h3>
                <h3 className="text-lg basis-4 grow bg-green-500 text-white p-2 rounded text-center text-gray-700">
                    {`Weight: ${pokemon.weight}`}
                </h3>
                <h3 className="text-lg basis-4 grow bg-green-500 text-white p-2 rounded text-center text-gray-700">
                    {`Speed: ${pokemon.stats[5].base_stat}`}
                </h3>


                <h3 className="text-lg basis-4  grow bg-green-500 text-white p-2 rounded text-center ">
                    {`Experience: ${pokemon.base_experience}`}
                </h3>
                <h3 className="text-lg basis-4 grow bg-green-500 text-white p-2 rounded text-center ">
                    {`Ability: ${pokemon.abilities.map((abilitiesInfo) => abilitiesInfo.ability.name)[0]
                        }`}
                </h3>
                <h3 className="text-lg basis-4 grow  bg-green-500 text-white p-2 rounded text-center">
                    {`Speed: ${pokemon.stats[5].base_stat}`}
                </h3>
            </div>
        </div>
    );

}
// const h3 = 