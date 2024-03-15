import { useState } from "react";
import Expense from "./Expense";

function Category({cat, i}) {

  const [openedCategoryIndex, setOpenedCategoryIndex] = useState(-1);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenedCategoryIndex(openedCategoryIndex === index ? -1 : index);
  };

  function removeAccent(a) {
    return a.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }


  return (
    <div key={i}>
      <h3
        onClick={() => setExpandedCategory(expandedCategory === i ? null : i)}
        className="category-title"
      >
        <span className={removeAccent(cat.name.toLowerCase())}>{cat.name}</span>
        <span>
          <span className="category-price">{cat.total} €</span>
          <i
            className={
              expandedCategory === i ? "arrow arrow-down" : "arrow arrow-right"
            }
          >
            ▼
          </i>
        </span>
      </h3>
      {expandedCategory === i && <Expense expenses={cat.expenses} />}
    </div>
  );
}

export default Category;
