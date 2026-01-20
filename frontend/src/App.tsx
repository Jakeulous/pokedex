import "./index.css";
import PokedexList from "./section/List";

function App() {
  return (
    <div className="flex w-dvw h-dvh bg-slate-400">
      <div className="flex w-full justify-center bg-slate-200 mx-48">
        <div className="flex w-full">
          <PokedexList />
        </div>
      </div>
    </div>
  );
}

export default App;
