import { useExpContext } from "../utils/expContext";
import Input from "./Input"
import SelectCategory from "./SelectCategory";

function Inputs() {
    const [_, dispatch] = useExpContext();


    const handleClick = () => {
        dispatch({type:'add'});
      }
    
  return (
    <div className='choices'>
    <SelectCategory />
    <Input name='title' type='text' placeholder='nom de la dépense...' />
    <Input name='amount' type='number' placeholder='montant de la réponse' />
    <button onClick={handleClick}>Ajouter une dépense</button>
  </div>
  )
}

export default Inputs