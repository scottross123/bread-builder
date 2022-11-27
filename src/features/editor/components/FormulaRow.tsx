import { ChangeEvent } from "react";
import { InputMode } from "@/types/recipe";
import { formatNumber } from "@/utils";

const innerCellStyling = "w-20 inline-block";

export type FormulaRowProps = {
    ingredient: { 
        formulaIngredientId: string, 
        name: string, 
        ratio: number, 
        isFlour: boolean 
    }, 
    selectTotalFlourWeight: number,
    inputMode: InputMode,
    isDoughWeightLocked: boolean,
    changePercent:  (
        formulaIngredientId: string, 
        percent: number, 
        totalFlourWeight?: number,
    ) => void,
    changeWeight: (
        formulaIngredientId: string, 
        weight: number, 
        totalFlourWeight: number,
        isFlour? : boolean,
    ) => void,
}

const FormulaRow = (props: FormulaRowProps) => {
    const {
        ingredient: {
            formulaIngredientId,
            name,
            ratio,
            isFlour,
        },
        selectTotalFlourWeight, 
        inputMode, 
        isDoughWeightLocked,
        changePercent,
        changeWeight,
    } = props;

    //console.log({name: name, isFlour: isFlour})

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);

        if (inputMode === "percent") {
            if (!isDoughWeightLocked) 
                return changePercent(formulaIngredientId, value, selectTotalFlourWeight);
            return changePercent(formulaIngredientId, value);
        }
        
        if (inputMode === "weight") { 
            return changeWeight(formulaIngredientId, value, selectTotalFlourWeight, isFlour);
        }
    }


    const percent = ratio * 100;
    const weight = ratio * selectTotalFlourWeight;
    const isPercentReadOnly = inputMode === "percent";
    
    return (
        <tr>
            <td>{name}</td>
            <td>
                <input 
                    className={innerCellStyling} 
                    type="number" 
                    value={formatNumber(percent)} 
                    onChange={handleChange} 
                    readOnly={!isPercentReadOnly} 
                />%
            </td>
            <td>
                <input 
                    className={innerCellStyling} 
                    type="number" 
                    value={formatNumber(weight)} 
                    onChange={handleChange} 
                    readOnly={isPercentReadOnly} 
                />g
            </td>
        </tr>        
    );
}

export default FormulaRow; 
