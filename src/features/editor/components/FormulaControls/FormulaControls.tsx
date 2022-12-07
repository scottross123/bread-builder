import { InputMode, WhichWeightConstant } from "@/types";
import { Dispatch, SetStateAction } from "react";
import FormulaModeSelection from "./FormulaModeSelection";
import Vitals from "./Vitals";
import Weight from "./Weight";

export type FormulaControlsProps = {
    unitWeight: number,
    unitQuantity: number,
    changeUnitWeight: (newUnitWeight: number) => void,
    changeUnitQuantity: (newUnitQuantity: number) => void,
    whichWeightConstant: WhichWeightConstant,
    setWhichWeightConstant: Dispatch<SetStateAction<WhichWeightConstant>>,
    inputMode: InputMode,
    setInputMode: Dispatch<SetStateAction<InputMode>>,
    selectFormulaTotalFlourWeight: (formulaId: string) => number,
}

const FormulaControls = (props: FormulaControlsProps) => {
    const {
        unitWeight,
        unitQuantity,
        changeUnitWeight,
        changeUnitQuantity,
        inputMode,
        setInputMode,
        whichWeightConstant,
        setWhichWeightConstant,
        selectFormulaTotalFlourWeight,
    } = props;

    return (
        <div className="flex justify-between">
            <Weight 
                unitWeight={unitWeight}
                unitQuantity={unitQuantity}
                changeUnitQuantity={changeUnitQuantity}
                changeUnitWeight={changeUnitWeight}
            />
            
            <Vitals
                formulaId="overall"
                selectFormulaTotalFlourWeight={selectFormulaTotalFlourWeight}
            />

            <FormulaModeSelection 
                inputMode={inputMode}
                setInputMode={setInputMode}
                whichWeightConstant={whichWeightConstant}
                setWhichWeightConstant={setWhichWeightConstant}
            />
        </div>
    );
}

export default FormulaControls;

