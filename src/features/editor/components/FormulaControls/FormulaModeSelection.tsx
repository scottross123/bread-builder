import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { InputMode, WhichWeightConstant } from "@/types";
import { Cell, InfoTable } from "@/components";
import InputModeSelection from "./InputModeSelection";
import { FormulaControlsProps } from "./FormulaControls";
import ConstantWeightSelection from "./ConstantWeightSelection";

export type FormulaModeSelectionProps = Pick<FormulaControlsProps, "whichWeightConstant" | "setWhichWeightConstant" | "inputMode" | "setInputMode">

const FormulaModeSelection = (props: FormulaModeSelectionProps) => {
    const { 
        whichWeightConstant, 
        setWhichWeightConstant,
        inputMode,
        setInputMode
    } = props;



    return (
        <InfoTable>
            <tr>
                <Cell>
                    <ConstantWeightSelection
                        whichWeightConstant={whichWeightConstant}
                        setWhichWeightConstant={setWhichWeightConstant}
                        inputMode={inputMode}
                        setInputMode={setInputMode}
                    />
                </Cell>
            </tr>

            <tr>
                <Cell>
                    <InputModeSelection 
                        inputMode={inputMode}
                        setInputMode={setInputMode}
                        whichWeightConstant={whichWeightConstant}
                    />
                </Cell>
            </tr>
        </InfoTable>
    )
}

export default FormulaModeSelection;