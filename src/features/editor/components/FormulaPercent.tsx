import { InputMode } from "@/types/recipe";
import { formatNumber } from "@/utils";
import { ChangeEvent } from "react";

const innerCellStyling = "w-20 inline-block";

type FormulaPercentProps = {
    formulaIngredientId: string,
    percent: number,
    selectTotalFlourWeight?: number,
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
        selectTotalFlourWeight,
        primaryFlourId,
        inputMode,
        changePercent,
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        changePercent(formulaIngredientId, value, selectTotalFlourWeight, primaryFlourId);
    }

    return (
        <td>
            <input 
                className={innerCellStyling} 
                type="number" 
                value={formatNumber(percent)} 
                onChange={handleChange} 
                readOnly={inputMode === "weight"} 
            />%
        </td>
    );
}

export default FormulaPercent;