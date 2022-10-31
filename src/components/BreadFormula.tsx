import { ChangeEvent, useState } from "react";
import { Ingredient, InputMode } from "../types";
import InputModeSelection from "./InputModeSelection";
import OverallTable from "./OverallTable";

type BreadFormulaProps = {
    ingredients: Ingredient[],
    initialTotalDoughWeight: number,
}

const BreadFormula = (props: BreadFormulaProps) => {
    const { ingredients, initialTotalDoughWeight } = props;    
    const [inputMode, setInputMode] = useState<InputMode>("percent");
    const [totalDoughWeight, setTotalDoughWeight] = useState<number>(initialTotalDoughWeight);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setTotalDoughWeight(parseInt(event.target.value));

    return (
        <div data-testid="bread-formula" className="">
            <OverallTable 
                ingredients={ingredients} 
                inputMode={inputMode} 
                totalDoughWeight={totalDoughWeight} 
            />
            <input type="number" value={totalDoughWeight} onChange={handleChange} />
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode} />
        </div>
    );
};

export default BreadFormula;
