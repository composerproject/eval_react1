import './App.css'
import Category from './component/Category';
import Expense from './component/Expense';
import Inputs from './component/Inputs';
import { useExpContext } from './utils/expContext';
import{ useState } from 'react';



function App() {

  const [state, dispatch] = useExpContext();
  


  return (
    <>
      <h1>Mes dépenses personnelles</h1>
      <h2>Total : {state.total} €</h2>
      
<Inputs />

    <div>
      {state.categories.map((cat, i) => (
        <Category key={i} cat={cat} i={i} />
        // <div key={i}>
        //   <h3 
        //     onClick={() => setExpandedCategory(expandedCategory === i ? null : i)}
        //     className="category-title"
        //   >
        //     <span className={removeAccent(cat.name.toLowerCase())}>{cat.name}</span><span><span className='category-price'>{cat.total} €</span>
        //     <i className={expandedCategory === i ? "arrow arrow-down" : "arrow arrow-right"}>
        //       ▼
        //     </i>
        //     </span>
        //   </h3>
        //   {expandedCategory === i && (
        //     <Expense expenses={cat.expenses}/>
        //   )}
        // </div>
      ))}
    </div>

    </>
  );
}

export default App
