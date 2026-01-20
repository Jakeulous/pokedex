import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonHome from "./pages/pokemons/home";

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-dvw h-dvh bg-slate-400 overflow-hidden">
        <div className="flex w-full justify-center mx-38 my-10">
          <Routes>
            <Route path="/" element={<PokemonHome />} />
            <Route path="/pokemon/:id" element={<PokemonHome />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
