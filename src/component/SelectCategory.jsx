import { useExpContext } from "../utils/expContext";



const SelectCategory = () => {

    const [_, dispatch] = useExpContext();

    // const [value, setValue] = useState('')

    const handleChange = (e) => {
        // setValue(e.target.value)
        dispatch({type:'set_category', payload: e.target.value});

    }

    return (
        <select name={'select'} onChange={handleChange}>
            <option value='Alimentation'>Alimentation</option>
            <option value='Logement'>Logement</option>
            <option value='Transport'>Transport</option>
            <option value='Divertissement'>Divertissement</option>
            <option value='Santé'>Santé</option>
            <option value='Education'>Education</option>
            <option value='Autres'>Autres</option>
        </select>
    );
};

export default SelectCategory;