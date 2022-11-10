import { useState } from "react";
import { Formula, Ingredient, InputMode } from "@/types/formula";
import DoughWeightControls from "./DoughWeightControls";
import InputModeSelection from "./InputModeSelection";
import LockDoughWeight from "./LockDoughWeight";
import OverallTable from "./OverallTable";

type BreadFormulaProps = {
    formula: Formula,
    changePercent: (id: string, percent: number, totalFlourWeight?: number) => void,
    changeWeight: (id: string, weight: number, totalFlourWeight: number) => void,
    changeUnitWeight: (newUnitWeight: number) => void,
    changeUnitQuantity: (newUnitQuantity: number) => void,
    changeWasteFactor: (newWasteFactor: number) => void,
    selectTotalDoughWeight: number,
    selectTotalFlourWeight: number,
    selectTotalPercentage: number,
}

const BreadFormula = (props: BreadFormulaProps) => {
    const { 
        formula: { 
            unitQuantity,
            unitWeight,
            wasteFactor,
            flours, 
            ingredients 
        }, 
        changePercent,
        changeWeight,
        changeUnitWeight,
        changeUnitQuantity,
        changeWasteFactor,
        selectTotalDoughWeight,
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
                selectTotalDoughWeight={selectTotalDoughWeight}
                changePercent={changePercent}
                changeWeight={changeWeight}
                selectTotalFlourWeight={selectTotalFlourWeight}
                selectTotalPercentage={selectTotalPercentage}
            />
            <DoughWeightControls 
                unitWeight={unitWeight}
                unitQuantity={unitQuantity}
                wasteFactor={wasteFactor}
                changeUnitWeight={changeUnitWeight}
                changeUnitQuantity={changeUnitQuantity}
                changeWasteFactor={changeWasteFactor}
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
