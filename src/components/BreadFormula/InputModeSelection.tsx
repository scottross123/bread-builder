import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputMode } from "./BreadFormula";

type InputModeSelectionProps = {
    inputMode: InputMode,
    setInputMode: Dispatch<SetStateAction<InputMode>>,
}

const InputModeSelection = (props: InputModeSelectionProps) => {
    const { inputMode, setInputMode } = props;
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget?.value as InputMode);
        setInputMode(event.currentTarget?.value as InputMode);
    }

    return (
        <div>
            <label htmlFor="ratio">Ratio</label>
            <input 
                id="ratio" 
                type="radio" 
                name="mode" 
                value="ratio" 
                onChange={handleChange} 
                defaultChecked={inputMode === 'ratio'} 
            />
            <label htmlFor="weight">Weight</label>
            <input 
                id="weight" 
                type="radio" 
                name="mode" 
                value="weight" 
                onChange={handleChange} 
                defaultChecked={inputMode === 'weight'} 
            />
        </div>
    );
}

export default InputModeSelection;