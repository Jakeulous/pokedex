export async function index() {
    return fetch(
        `http://localhost:3000/pokemons`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )
}