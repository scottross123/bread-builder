import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputMode } from "../types";

type InputModeSelectionProps = {
    inputMode: InputMode,
    setInputMode: Dispatch<SetStateAction<InputMode>>,
}

const InputModeSelection = (props: InputModeSelectionProps) => {
    const { inputMode, setInputMode } = props;
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setInputMode(event.currentTarget?.value as InputMode);

    return (
        <div>
            <label htmlFor="percent">Ratio</label>
            <input 
                id="percent" 
                type="radio" 
                name="mode" 
                value="percent" 
                onChange={handleChange} 
                defaultChecked={inputMode === "percent"} 
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