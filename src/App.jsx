import "./App.css";
import Categories from "./component/Categories";
import Inputs from "./component/Inputs";
import { useExpContext } from "./utils/expContext";

function App() {
  const [state] = useExpContext();

  return (
    <>
      <h1>Mes dépenses personnelles</h1>
      <h2>Total : {state.total} €</h2>

      <Inputs />

      <Categories categories={state.categories} />
    </>
  );
}

export default App;
