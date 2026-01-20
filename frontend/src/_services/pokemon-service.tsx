export async function index() {
  return fetch(`http://localhost:3000/pokemons`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function show(id: number) {
  return fetch(`http://localhost:3000/pokemons/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
