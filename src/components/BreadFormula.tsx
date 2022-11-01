import { ChangeEvent, useState } from "react";
import { Formula, Ingredient, InputMode } from "../types";
import InputModeSelection from "./InputModeSelection";
import OverallTable from "./OverallTable";

type BreadFormulaProps = {
    formula: Formula,
    changePercent: () => void
}

const BreadFormula = (props: BreadFormulaProps) => {
    const { formula: { totalDoughWeight, flours, ingredients }, changePercent } = props;
    const [inputMode, setInputMode] = useState<InputMode>("percent");
    const ingredientsList: Ingredient[] = ingredients.allIds.map((id: string) => ingredients.byId[id]);
    console.log(ingredientsList)
    console.log(props.formula)
    //const handleChange = (event: ChangeEvent<HTMLInputElement>) => setTotalDoughWeight(parseInt(event.target.value));

    return (
        <div data-testid="bread-formula" className="">
            <OverallTable 
                ingredients={ingredientsList} 
                inputMode={inputMode} 
                totalDoughWeight={totalDoughWeight} 
                changePercent={changePercent}
            />
            {/* <input type="number" value={totalDoughWeight} onChange={handleChange} /> */}
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode} />
        </div>
    );
};

export default BreadFormula;
