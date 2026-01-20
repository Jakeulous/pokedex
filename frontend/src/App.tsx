import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonHome from "./pages/pokemons/home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PokedexNavbar } from "./_sections/navbar";
import AbilitiesHome from "./pages/abilities/abilities";
import ElementsHome from "./pages/elements/elements";
import { PageTitleUpdater } from "./_sections/titleUpdater";
import Footer from "./_sections/footer";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageTitleUpdater />
        <div className="flex flex-col w-full min-h-screen bg-slate-400 pt-10">
          <PokedexNavbar />
          <main className="flex flex-row w-full flex-grow">
            <div className="flex w-full justify-center mx-38 my-10">
              <Routes>
                <Route path="/" element={<PokemonHome />} />
                <Route path="/abilities" element={<AbilitiesHome />} />
                <Route path="/elements" element={<ElementsHome />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
