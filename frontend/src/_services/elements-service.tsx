export async function index() {
  return fetch(`http://localhost:3000/elements`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function show(id: number) {
  return fetch(`http://localhost:3000/elements/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
