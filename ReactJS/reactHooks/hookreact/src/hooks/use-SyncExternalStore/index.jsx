import { useEffect, useSyncExternalStore } from "react"
import { fetchPokemons, getState, subscribe } from "./externalStore"

export const SyncExternalStoreExample = () => {
    const {pokemons} = useSyncExternalStore(subscribe, getState);

    useEffect(() => {
        fetchPokemons()
    },[])

    return(
        <div>
           <h1>Pokemon List</h1>
           <ul>
             {pokemons.length === 0 ? (
                <p>Loading...</p>
             ) : (
                pokemons.map((pokemon, index) => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))
             )}
           </ul>
        </div>
    )
}