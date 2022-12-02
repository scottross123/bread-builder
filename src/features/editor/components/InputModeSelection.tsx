import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputMode } from "@/types/Recipe";

type InputModeSelectionProps = {
    inputMode: InputMode,
    setInputMode: Dispatch<SetStateAction<InputMode>>,
    isDoughWeightLocked: boolean,
}

const InputModeSelection = (props: InputModeSelectionProps) => {
    const { inputMode, setInputMode, isDoughWeightLocked } = props;
    
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
                disabled={isDoughWeightLocked}
            />
        </div>
    );
}

export default InputModeSelection;