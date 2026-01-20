import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonHome from "./pages/pokemons/home";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
