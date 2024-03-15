import './App.css'
import Input from './component/Input';
import SelectCategory from './component/SelectCategory';
import { useExpContext } from './utils/expContext';
import{ useState } from 'react';



function App() {

  const [state, dispatch] = useExpContext();
  
    const [openedCategoryIndex, setOpenedCategoryIndex] = useState(-1);
    const [expandedCategory, setExpandedCategory] = useState(null);
  
    const toggleCategory = (index) => {
      setOpenedCategoryIndex(openedCategoryIndex === index ? -1 : index);
    };
  
    function removeAccent(a) {
      return a.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
  


  const handleClick = () => {
    dispatch({type:'add'});
  }

  // const handleChange = (e) => {
  //   dispatch({type:'set_input', payload:{inputName:e.target.name, inputValue: e.target.value} })
  // }

  return (
    <>
      <h1>Mes dépenses personnelles</h1>
      <h2>Total : {state.total} €</h2>
      
      <div className='choices'>
        <SelectCategory />
        <Input name='title' type='text' placeholder='nom de la dépense...' />
        <Input name='amount' type='number' placeholder='montant de la réponse' />

        {/* <input onChange={handleChange} name='title' type="text" placeholder='nom de la dépense...'/>

        <input onChange={handleChange} name='amount' type="number" placeholder='montant de la dépense...' /> */}

        <button onClick={handleClick}>Ajouter une dépense</button>
      </div>

    <div>
      {state.categories.map((cat, i) => (
        <div key={i}>
          <h3 
            onClick={() => setExpandedCategory(expandedCategory === i ? null : i)}
            className="category-title"
          >
            <span className={removeAccent(cat.name.toLowerCase())}>{cat.name}</span><span><span className='category-price'>{cat.total} €</span>
            <i className={expandedCategory === i ? "arrow arrow-down" : "arrow arrow-right"}>
              ▼
            </i>
            </span>
          </h3>
          {expandedCategory === i && (
            <div className='expenses-container'>
              <ul>
                {cat.expenses.map((exp, j) => (
                  <li className='expense' key={j}><span>{exp.title}</span><span>{exp.amount} €</span></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>

    </>
  );
}

export default App
