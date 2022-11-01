import { ChangeEvent, useState } from "react";
import { Formula, Ingredient, InputMode } from "../types";
import InputModeSelection from "./InputModeSelection";
import OverallTable from "./OverallTable";

type BreadFormulaProps = {
    formula: Formula,
    changePercent: (id: string, newPercent: number) => void,
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
        changeTotalDoughWeight, 
    } = props;
    const [inputMode, setInputMode] = useState<InputMode>("percent");
    const ingredientsList: Ingredient[] = ingredients.allIds.map((id: string) => ingredients.byId[id]);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => changeTotalDoughWeight(parseInt(event.target.value));

    return (
        <div data-testid="bread-formula" className="">
            <OverallTable 
                ingredients={ingredientsList} 
                inputMode={inputMode} 
                totalDoughWeight={totalDoughWeight} 
                changePercent={changePercent}
            />
            <input type="number" value={totalDoughWeight} onChange={handleChange}/>
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode} />
        </div>
    );
};

export default BreadFormula;
