import { InputMode } from "@/types/Recipe";
import { formatNumber } from "@/utils";
import { ChangeEvent } from "react";
import Cell from "./Cell";

const innerCellStyling = "w-20 inline-block";

type FormulaWeightProps = {
    formulaIngredientId: string,
    weight: number,
    selectTotalFlourWeight: number,
    isFlour?: boolean,
    inputMode: InputMode,
    changeWeight: (
        formulaIngredientId: string, 
        weight: number, 
        totalFlourWeight: number,
        isFlour? : boolean,
    ) => void,
}

const FormulaWeight = (props: FormulaWeightProps) => {
    const {
        formulaIngredientId,
        weight,
        selectTotalFlourWeight,
        isFlour,
        inputMode,
        changeWeight
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        changeWeight(formulaIngredientId, value, selectTotalFlourWeight, isFlour);
    }

    return (
        <Cell unit="g">
            <input 
                className={innerCellStyling} 
                type="number" 
                value={formatNumber(weight)} 
                onChange={handleChange} 
                readOnly={inputMode === "percent"} 
            />
        </Cell>
    );
}

export default FormulaWeight;