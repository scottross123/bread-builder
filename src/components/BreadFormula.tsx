import { useState } from "react";
import { Formula, Ingredient, InputMode } from "../types";
import DoughWeightControls from "./DoughWeightControls";
import InputModeSelection from "./InputModeSelection";
import LockDoughWeight from "./LockDoughWeight";
import OverallTable from "./OverallTable";

type BreadFormulaProps = {
    formula: Formula,
    changePercent: (id: string, percent: number, totalFlourWeight?: number) => void,
    changeWeight: (id: string, weight: number, totalFlourWeight: number) => void,
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
    const [isDoughWeightLocked, setIsDoughWeightLocked] = useState(true);
    
    const ingredientsList: Ingredient[] = ingredients.allIds.map((id: string) => ingredients.byId[id]);
    const floursList: Ingredient[] = flours.allIds.map((id: string) => flours.byId[id]); 

    return (
        <div data-testid="bread-formula" className="">
            <OverallTable 
                ingredients={ingredientsList} 
                flours={floursList}
                inputMode={inputMode} 
                isDoughWeightLocked={isDoughWeightLocked}
                totalDoughWeight={totalDoughWeight} 
                changePercent={changePercent}
                changeWeight={changeWeight}
                selectTotalFlourWeight={selectTotalFlourWeight}
                selectTotalPercentage={selectTotalPercentage}
            />
            <DoughWeightControls 
                totalDoughWeight={totalDoughWeight} 
                changeTotalDoughWeight={changeTotalDoughWeight} 
            />
            <LockDoughWeight 
                isDoughWeightLocked={isDoughWeightLocked} 
                setIsDoughWeightLocked={setIsDoughWeightLocked}
                inputMode={inputMode}
                setInputMode={setInputMode}
            />
            <InputModeSelection 
                inputMode={inputMode} 
                setInputMode={setInputMode} 
                isDoughWeightLocked={isDoughWeightLocked}
            />
        </div>
    );
};

export default BreadFormula;
