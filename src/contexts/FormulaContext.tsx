import { createContext, useContext, useReducer } from "react";

const FormulaContext = createContext(null);
const FormulaDispatchContext = createContext(null);

type FormulaProviderProps = {
    children: JSX.Element,
}

export const FormulaProvider = (props: FormulaProviderProps) => {
    const { children } = props;

    return (
        <FormulaContext.Provider value ={null}>
            <FormulaDispatchContext.Provider value ={null}>
                {children}
            </FormulaDispatchContext.Provider>
        </FormulaContext.Provider>
    );
}

//export const useFormula = () => useContext(FormulaContext);
//export const useFormulaDispatch = () => useContext(FormulaDispatchContext);