import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../reducer/expReducer";


const ExpContext = createContext();

export const useExpContext = () => useContext(ExpContext);

const ExpContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = [state, dispatch];

    return <ExpContext.Provider value={value}>
        {children}
    </ExpContext.Provider>
}

export default ExpContextProvider;