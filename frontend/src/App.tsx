import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonHome from "./pages/pokemons/home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PokedexNavbar } from "./_sections/navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-col w-dvw h-dvh bg-slate-400 overflow-contain">
          <PokedexNavbar />
          <div className="flex w-full justify-center">
            <Routes>
              <Route path="/" element={<PokemonHome />} />
              <Route path="/pokemon/:id" element={<PokemonHome />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
