import { ChangeEvent, useState } from "react";
import { Formula, Ingredient, InputMode } from "../types";
import { formatNumber } from "../utils";
import InputModeSelection from "./InputModeSelection";
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => changeTotalDoughWeight(parseFloat(event.target.value));

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
            <input type="number" value={formatNumber(totalDoughWeight)} onChange={handleChange}/>
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode} />
        </div>
    );
};

export default BreadFormula;
