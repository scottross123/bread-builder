import { ChangeEvent, useState } from "react";
import { Formula, Ingredient, InputMode } from "../types";
import { formatNumber } from "../utils";
import DoughWeightControls from "./DoughWeightControls";
import InputModeSelection from "./InputModeSelection";
import LockDoughWeight from "./LockDoughWeight";
import OverallTable from "./OverallTable";

type BreadFormulaProps = {
    formula: Formula,
    changePercent: (id: string, newPercent: number) => void,
    changeWeight: (id: string, newWeight: number) => void,
    changeTotalDoughWeight: (newTotalDoughWeight: number) => void,
    selectTotalFlourWeight: number,
    selectTotalPercentage: number,
}

const BreadFormula = (props: BreadFormulaProps) => {
    const { 
        formula: { 
            totalDoughWeight, 
            flours, 
            ingredients 
        }, 
        changePercent,
        changeWeight,
        changeTotalDoughWeight, 
        selectTotalFlourWeight,
        selectTotalPercentage,
    } = props;
    const [inputMode, setInputMode] = useState<InputMode>("percent");
    const ingredientsList: Ingredient[] = ingredients.allIds.map((id: string) => ingredients.byId[id]);
    const floursList: Ingredient[] = flours.allIds.map((id: string) => flours.byId[id]); 

    return (
        <div data-testid="bread-formula" className="">
            <OverallTable 
                ingredients={ingredientsList} 
                flours={floursList}
                inputMode={inputMode} 
                totalDoughWeight={totalDoughWeight} 
                changePercent={changePercent}
                changeWeight={changeWeight}
                selectTotalFlourWeight={selectTotalFlourWeight}
                selectTotalPercentage={selectTotalPercentage}
            />
            <DoughWeightControls totalDoughWeight={totalDoughWeight} changeTotalDoughWeight={changeTotalDoughWeight} />
            <LockDoughWeight isDoughWeightLocked={true} />
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode} />
        </div>
    );
};

export default BreadFormula;
