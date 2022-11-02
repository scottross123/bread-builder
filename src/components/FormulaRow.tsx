import { ChangeEvent, useState } from "react";
import { Ingredient, InputMode } from "../types";

const innerCellStyling = "w-20 inline-block";

export type FormulaRowProps = {
    ingredient: Ingredient, 
    totalFlourWeight: number,
    inputMode: InputMode,
    changePercent: (id: string, newPercent: number) => void,
    changeWeight: (id: string, newWeight: number) => void,
}

const FormulaRow = (props: FormulaRowProps) => {
    const {
        ingredient: {
            id,
            name,
            ratio
        },
        totalFlourWeight, 
        inputMode, 
        changePercent,
        changeWeight,
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        if (inputMode === "percent") return changePercent(id, value);
        if (inputMode === "weight") return changeWeight(id, value);
    }
    
    const value = inputMode === "percent" ?  ratio * 100 : ratio * totalFlourWeight; 

    return (
        <tr>
            <td>{name}</td>
            {
                inputMode === "percent" ? (
                    <>
                        <td><input className={innerCellStyling} type="number" value={value} onChange={handleChange} step="any" />%</td>
                        <td><input className={innerCellStyling} type="number" value={value * totalFlourWeight / 100} readOnly step="any" />g</td>
                    </>
                ) : (
                    <>
                        <td><input className={innerCellStyling} type="number" value={value / totalFlourWeight * 100} readOnly step="any" />%</td>
                        <td><input className={innerCellStyling} type="number" value={value} onChange={handleChange} step="any" />g</td>
                    </>
                )
            }
        </tr>        
    );
}

export default FormulaRow; 
