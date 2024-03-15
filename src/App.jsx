import './App.css'
import { useExpContext } from './utils/expContext';

function App() {

  const [state, dispatch] = useExpContext();

  const handleClick = () => {
    dispatch({type:'add', payload:{category:'Autres'}});
  }

  const handleChange = (e) => {
    dispatch({type:'set_input', payload:{inputName:e.target.name, inputValue: e.target.value} })
  }

  return (
    <>
      <h1>Mes dépenses personnelles</h1>
      <input onChange={handleChange} name='title' type="text" placeholder='nom de la dépense'/>
      <input onChange={handleChange} name='amount' type="number" placeholder='montant de la dépense' />
      <button onClick={handleClick}>Ajouter une dépense</button>
      <p>Total : {state.total} €</p>
      <ul>
        {state.categories.map((cat, i) => <li key={i}>{cat.name} : {cat.total} €
          <ul>
            {cat.expenses.map((exp, j) => <li key={j}>{exp.title} : {exp.amount} €</li>)}
          </ul>
        </li>)}
      </ul>
      <div>App</div>
    </>
  )
}

export default App
