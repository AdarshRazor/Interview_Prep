let state = { pokemons: []} // Initial state
let listeners = []; // List of subscribers
 
// Function to fetch data and update the state
export const fetchPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    const data = await response.json()
    state = { pokemons: data.results }
    listeners.forEach((listener) => listener()); // Notify all of the subscribers
}

export const getState = () => state;

export const subscribe = (listener) => {
    listeners.push(listener);
    return() => {
        listeners = listeners.filter((l) => l!== listener); // Remove the listener when unsubscribed
    }
}