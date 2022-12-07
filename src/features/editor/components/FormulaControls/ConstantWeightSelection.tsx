import { Cell, InfoTable } from "@/components";
import { WhichWeightConstant } from "@/types";
import { ChangeEvent } from "react";
import { FormulaModeSelectionProps } from "./FormulaModeSelection";

type ConstantWeightSelectionProps = Pick<FormulaModeSelectionProps, "whichWeightConstant" | "setWhichWeightConstant" | "inputMode" | "setInputMode">;

const ConstantWeightSelection = (props: ConstantWeightSelectionProps) => {
    const { 
        whichWeightConstant, 
        setWhichWeightConstant, 
        inputMode, 
        setInputMode 
    } = props;
    
    const handleChange = (event: ChangeEvent) => {
        const value = (event.target as HTMLSelectElement)?.value;
        console.log("value: ", value)
        setWhichWeightConstant(value as WhichWeightConstant);
        if (whichWeightConstant === "flour" && inputMode === "weight") {
            setInputMode("percent");
        }
    }

    return (
        <select className="bg-inherit" onChange={handleChange}>                
            <option value="dough">Keep dough weight constant</option>
            <option value="flour">Keep flour weight constant</option>
        </select>
    )
}

export default ConstantWeightSelection;