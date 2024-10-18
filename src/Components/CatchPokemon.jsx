import { useState } from "react";

export const CatchPokemon = ({searchPokemon}) => {
    const[inputValue,setInputValue] = useState("")

    // handle form SubmitEvent
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        searchPokemon(inputValue)
        setInputValue("")
    }
    // end 
   
    // end 
    return (
        <div className="flex catch-pokemon justify-center mt-14 mb-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl">lets catch pokemon</h1>
                <form action="" onSubmit={handleFormSubmit}>
                    <input type="text" className="p-2 rounded-md text-lg outline-none border-none w-full" value={inputValue} onChange={(event) =>{
                        setInputValue(event.target.value)
                        searchPokemon(event.target.value)
                        
                        
                

                    }} />
                </form>
            </div>

        </div>
    )
}