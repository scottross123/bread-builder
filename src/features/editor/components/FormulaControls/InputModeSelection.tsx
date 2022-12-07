import { ChangeEvent, } from "react";
import { InputMode } from "@/types";
import { FormulaModeSelectionProps } from "./FormulaModeSelection";

type InputModeSelectionProps = Omit<FormulaModeSelectionProps, "setWhichWeightConstant">


const InputModeSelection = (props: InputModeSelectionProps) => {
    const { inputMode, setInputMode, whichWeightConstant } = props;
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setInputMode(event.currentTarget?.value as InputMode);

    return (
        <div>
            <label htmlFor="percent">Percent</label>
            <input 
                id="percent" 
                type="radio" 
                name="mode" 
                value="percent" 
                onChange={handleChange} 
                checked={inputMode === "percent"} 
            />
            <label htmlFor="weight">Weight</label>
            <input 
                id="weight" 
                type="radio" 
                name="mode" 
                value="weight" 
                onChange={handleChange} 
                checked={inputMode === 'weight'} 
                disabled={whichWeightConstant === "dough"}
            />
        </div>
    );
}

export default InputModeSelection;