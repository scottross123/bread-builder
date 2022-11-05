import { ChangeEvent, useState } from "react";
import { Ingredient, InputMode } from "../types";
import { formatNumber } from "../utils";

const innerCellStyling = "w-20 inline-block";

export type FormulaRowProps = {
    ingredient: Ingredient, 
    selectTotalFlourWeight: number,
    inputMode: InputMode,
    changePercent: (id: string, newPercent: number) => void,
    changeWeight: (id: string, newWeight: number, selectTotalFlourWeight: number) => void,
}

const FormulaRow = (props: FormulaRowProps) => {
    const {
        ingredient: {
            id,
            name,
            ratio
        },
        selectTotalFlourWeight, 
        inputMode, 
        changePercent,
        changeWeight,
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);

        if (inputMode === "percent") {
            return changePercent(id, value);
        }
        
        if (inputMode === "weight") { 
            return changeWeight(id, value, selectTotalFlourWeight);
        }
    }


    const percent = ratio * 100;
    const weight = ratio * selectTotalFlourWeight;
    const isPercentReadOnly = inputMode === "percent";
    
    //console.log("percent", percent); 
    //console.log("weight", weight); 

    return (
        <tr>
            <td>{name}</td>
            <td><input className={innerCellStyling} type="number" value={formatNumber(percent)} onChange={handleChange} readOnly={!isPercentReadOnly} />%</td>
            <td><input className={innerCellStyling} type="number" value={formatNumber(weight)} onChange={handleChange} readOnly={isPercentReadOnly} />g</td>
        </tr>        
    );
}

export default FormulaRow; 
