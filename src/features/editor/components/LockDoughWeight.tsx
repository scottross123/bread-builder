import { Dispatch, SetStateAction } from "react";
import { InputMode } from "@/types";

type LockDoughWeightProps = {
    whichWeightConstant: boolean,
    setWhichWeightConstant: Dispatch<SetStateAction<boolean>>,
    inputMode: InputMode,
    setInputMode: Dispatch<SetStateAction<InputMode>>,
}

const LockDoughWeight = (props: LockDoughWeightProps) => {
    const { 
        whichWeightConstant, 
        setWhichWeightConstant, 
        setInputMode, 
        inputMode 
    } = props;

    const handleChange = () => {
        setWhichWeightConstant(!whichWeightConstant);
        if (!whichWeightConstant && inputMode === "weight") setInputMode("percent")
    }

    return (
        <label htmlFor="lock-dough-weight">
            Lock Dough Weight
            <input 
                id="lock-dough-weight" 
                type="checkbox" 
                checked={whichWeightConstant} 
                onChange={handleChange} 
            />
        </label>
    )
}

export default LockDoughWeight;