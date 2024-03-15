import './App.css'
import { useExpContext } from './utils/expContext';

function App() {

  const [state, dispatch] = useExpContext();

  return (
    <>
      <h1>Mes dépenses personnelles</h1>
      <p>Total : {state.total} €</p>
      <ul>
        {state.categories.map((cat, i) => <li key={i}>{cat.name} : {cat.total}
          <ul>
            {cat.expenses.map((exp, j) => <li key={j}>{exp.title} : {exp.amount}</li>)}
          </ul>
        </li>)}
      </ul>
      <div>App</div>
    </>
  )
}

export default App
