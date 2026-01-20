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

export async function update(id: number, payload: any) {
  return fetch(`http://localhost:3000/pokemons/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload), // Must stringify the object
    headers: {
      "Content-Type": "application/json", // Tell Rails it's JSON
      Accept: "application/json",
    },
  });
}
