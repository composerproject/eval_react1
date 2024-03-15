import { useExpContext } from "../utils/expContext";

function Input({name, type, placeholder}) {

    const [_, dispatch] = useExpContext();


    const handleChange = (e) => {
        dispatch({type:'set_input', payload:{inputName:e.target.name, inputValue: e.target.value} })
      }

  return (
        <input onChange={handleChange} name={name} type={type} placeholder={placeholder}/>
  )
}

export default Input