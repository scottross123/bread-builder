import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputMode, WhichWeightConstant } from "@/types";
import { Cell, InfoTable } from "@/components";
import InputModeSelection from "./InputModeSelection";
import { FormulaControlsProps } from "./FormulaControls";

type ConstantWeightProps = Pick<FormulaControlsProps, "whichWeightConstant" | "setWhichWeightConstant" | "inputMode" | "setInputMode">

const ConstantWeight = (props: ConstantWeightProps) => {
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
        if (!whichWeightConstant && inputMode === "weight") setInputMode("percent")
    }

    return (
        <InfoTable>
            <tr>
                <Cell>
                    <select className="bg-inherit" onChange={handleChange}>                
                        <option value="dough">Keep dough weight constant</option>
                        <option value="flour">Keep flour weight constant</option>
                    </select>
                </Cell>
            </tr>

            <tr>
                <Cell>
                    <InputModeSelection 
                        inputMode={inputMode}
                        setInputMode={setInputMode}
                    />
                </Cell>
            </tr>
        </InfoTable>
    )
}

export default ConstantWeight;