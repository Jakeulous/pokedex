import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonHome from "./pages/pokemons/home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PokedexNavbar } from "./_sections/navbar";
import AbilitiesHome from "./pages/abilities/abilities";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-col w-full min-h-screen bg-slate-400 pt-10">
          <PokedexNavbar />
          <div className="flex flex-row w-full">
            <div className="flex w-full justify-center mx-38 my-10">
              <Routes>
                <Route path="/" element={<PokemonHome />} />
                <Route path="/abilities" element={<AbilitiesHome />} />
                <Route path="/elements" element={<AbilitiesHome />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
