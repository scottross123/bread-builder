import { InputMode } from "@/types";
import { formatNumber } from "@/utils";
import { ChangeEvent } from "react";
import Cell from "./Cell";

const innerCellStyling = "w-20 inline-block";

type FormulaPercentProps = {
    formulaIngredientId: string,
    percent: number,
    selectFormulaTotalFlourWeight?: number,
    primaryFlourId?: string,
    inputMode: InputMode,
    changePercent:  (
        formulaIngredientId: string, 
        percent: number, 
        totalFlourWeight?: number,
        primaryFlourId?: string,
    ) => void,
}

const FormulaPercent = (props: FormulaPercentProps) => {
    const {
        formulaIngredientId,
        percent,
        selectFormulaTotalFlourWeight,
        primaryFlourId,
        inputMode,
        changePercent,
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        changePercent(formulaIngredientId, value, selectFormulaTotalFlourWeight, primaryFlourId);
    }

    return (
        <Cell unit="%">
            <input 
                className={innerCellStyling} 
                type="number" 
                value={formatNumber(percent)} 
                onChange={handleChange} 
                readOnly={inputMode === "weight"} 
            />
        </Cell>
    );
}

export default FormulaPercent;