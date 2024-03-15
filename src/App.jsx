import './App.css'
import Inputs from './component/Inputs';
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
  



  // const handleChange = (e) => {
  //   dispatch({type:'set_input', payload:{inputName:e.target.name, inputValue: e.target.value} })
  // }

  return (
    <>
      <h1>Mes dépenses personnelles</h1>
      <h2>Total : {state.total} €</h2>
      
<Inputs />

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
