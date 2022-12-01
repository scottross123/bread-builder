import { useState } from "react";
import { Recipe, InputMode, OverallFormula } from "@/types/recipe";
import DoughWeightControls from "./DoughWeightControls";
import InputModeSelection from "./InputModeSelection";
import LockDoughWeight from "./LockDoughWeight";
import FormulaTable from "./FormulaTable";

type BreadRecipeProps = {
    recipe: Recipe,
    changePercent: (id: string, percent: number, totalFlourWeight?: number) => void,
    changeWeight: (id: string, weight: number, totalFlourWeight: number) => void,
    changeUnitWeight: (newUnitWeight: number) => void,
    changeUnitQuantity: (newUnitQuantity: number) => void,
    changeWasteFactor: (newWasteFactor: number) => void,
    selectTotalDoughWeight: number,
    selectTotalFlourWeight: number,
    selectTotalRatio: (formulaId: string) => number,
}

const BreadRecipe = (props: BreadRecipeProps) => {
    const { 
        recipe: { 
            unitQuantity,
            unitWeight,
            wasteFactor,
            entities: {
                ingredients,
                formulaIngredients,
                formulas,
            }    
        }, 
        changePercent,
        changeWeight,
        changeUnitWeight,
        changeUnitQuantity,
        changeWasteFactor,
        selectTotalDoughWeight,
        selectTotalFlourWeight,
        selectTotalRatio,
    } = props;
    const [inputMode, setInputMode] = useState<InputMode>("percent");
    const [isDoughWeightLocked, setIsDoughWeightLocked] = useState(true);

    return (
        <div data-testid="bread-formula" className="">
            <FormulaTable 
                formula={formulas.byId["overall"] as OverallFormula}
                formulaIngredients={formulaIngredients}
                ingredients={ingredients}
                inputMode={inputMode} 
                isDoughWeightLocked={isDoughWeightLocked}
                selectTotalDoughWeight={selectTotalDoughWeight}
                changePercent={changePercent}
                changeWeight={changeWeight}
                selectTotalFlourWeight={selectTotalFlourWeight}
                selectTotalRatio={selectTotalRatio}
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

export default BreadRecipe;
