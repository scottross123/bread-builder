import { Cell } from "@/components";
import { InputMode, WhichWeightConstant } from "@/types";
import { formatNumber } from "@/utils";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import ConstantWeight from "./ConstantWeight";
import InputModeSelection from "./InputModeSelection";
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
    } = props;

    return (
        <div className="flex justify-between">
            <Weight 
                unitWeight={unitWeight}
                unitQuantity={unitQuantity}
                changeUnitQuantity={changeUnitQuantity}
                changeUnitWeight={changeUnitWeight}
            />
            
            <Vitals />

            <ConstantWeight 
                inputMode={inputMode}
                setInputMode={setInputMode}
                whichWeightConstant={whichWeightConstant}
                setWhichWeightConstant={setWhichWeightConstant}
            />
        </div>
    );
}

export default FormulaControls;

