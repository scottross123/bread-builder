import { Dispatch, SetStateAction } from "react";
import { InputMode } from "../types";

type LockDoughWeightProps = {
    isDoughWeightLocked: boolean,
    setIsDoughWeightLocked: Dispatch<SetStateAction<boolean>>,
    inputMode: InputMode,
    setInputMode: Dispatch<SetStateAction<InputMode>>,
}

const LockDoughWeight = (props: LockDoughWeightProps) => {
    const { 
        isDoughWeightLocked, 
        setIsDoughWeightLocked, 
        setInputMode, 
        inputMode 
    } = props;

    const handleChange = () => {
        setIsDoughWeightLocked(!isDoughWeightLocked);
        if (!isDoughWeightLocked && inputMode === "weight") setInputMode("percent")
    }

    return (
        <label htmlFor="lock-dough-weight">
            Lock Dough Weight
            <input 
                id="lock-dough-weight" 
                type="checkbox" 
                checked={isDoughWeightLocked} 
                onChange={handleChange} 
            />
        </label>
    )
}

export default LockDoughWeight;