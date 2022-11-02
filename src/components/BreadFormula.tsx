import { ChangeEvent, useState } from "react";
import { Formula, Ingredient, InputMode } from "../types";
import InputModeSelection from "./InputModeSelection";
import OverallTable from "./OverallTable";

type BreadFormulaProps = {
    formula: Formula,
    changePercent: (id: string, newPercent: number) => void,
    changeWeight: (id: string, newWeight: number) => void,
    changeTotalDoughWeight: (newTotalDoughWeight: number) => void,
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
    } = props;
    const [inputMode, setInputMode] = useState<InputMode>("percent");
    const ingredientsList: Ingredient[] = ingredients.allIds.map((id: string) => ingredients.byId[id]);
    const floursList: Ingredient[] = Object.values(flours.byId);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => changeTotalDoughWeight(parseInt(event.target.value));

    return (
        <div data-testid="bread-formula" className="">
            <OverallTable 
                ingredients={ingredientsList} 
                flours={floursList}
                inputMode={inputMode} 
                totalDoughWeight={totalDoughWeight} 
                changePercent={changePercent}
                changeWeight={changeWeight}
            />
            <input type="number" value={totalDoughWeight} onChange={handleChange}/>
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode} />
        </div>
    );
};

export default BreadFormula;
