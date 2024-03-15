import './App.css'
import Categories from './component/Categories';
import Inputs from './component/Inputs';
import { useExpContext } from './utils/expContext';



function App() {

  const [state, dispatch] = useExpContext();
  


  return (
    <>
      <h1>Mes dépenses personnelles</h1>
      <h2>Total : {state.total} €</h2>
      
<Inputs />

<Categories categories={state.categories} />
    {/* <div>
      {state.categories.map((cat, i) => (
        <Category key={i} cat={cat} i={i} />
      ))}
    </div> */}

    </>
  );
}

export default App
