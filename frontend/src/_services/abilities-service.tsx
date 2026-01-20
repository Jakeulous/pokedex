export async function index() {
  return fetch(`http://localhost:3000/abilities`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function show(id: number) {
  return fetch(`http://localhost:3000/abilities/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
