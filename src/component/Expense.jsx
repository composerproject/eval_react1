

function Expense({expenses}) {
  return (
    <div className='expenses-container'>
    <ul>
      {expenses.map((exp, i) => (
        <li className='expense' key={i}><span>{exp.title}</span><span>{exp.amount} €</span></li>
      ))}
    </ul>
  </div>
  )
}

export default Expense