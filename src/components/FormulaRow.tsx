import { ChangeEvent, useState } from "react";
import { Ingredient, InputMode } from "../types";
import { formatNumber } from "../utils";

const innerCellStyling = "w-20 inline-block";

export type FormulaRowProps = {
    ingredient: Ingredient, 
    selectTotalFlourWeight: number,
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
        selectTotalFlourWeight, 
        inputMode, 
        changePercent,
        changeWeight,
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = formatNumber(parseInt(event.target.value));

        if (inputMode === "percent") {
            setPercent(value);
            setWeight(formatNumber(value * selectTotalFlourWeight / 100))
            return changePercent(id, value);
        }
        
        if (inputMode === "weight") { 
            setWeight(value);
            setPercent(formatNumber(value / selectTotalFlourWeight * 100))
            return changeWeight(id, value);
        }
    }
    
    const [percent, setPercent] = useState(formatNumber(ratio * 100));
    const [weight, setWeight] = useState(formatNumber(ratio * selectTotalFlourWeight));
    
    console.log("percent", percent); 
    console.log("weight", weight); 
    // const value = inputMode === "percent" ?  formatNumber(ratio * 100) : formatNumber(ratio * selectTotalFlourWeight); 

    return (
        <tr>
            <td>{name}</td>
            {
                inputMode === "percent" ? (
                    <>
                        <td><input className={innerCellStyling} type="number" value={percent} onChange={handleChange} step="any" />%</td>
                        <td><input className={innerCellStyling} type="number" value={weight} readOnly step="any" />g</td>
                    </>
                ) : (
                    <>
                        <td><input className={innerCellStyling} type="number" value={percent} readOnly step="any" />%</td>
                        <td><input className={innerCellStyling} type="number" value={weight} onChange={handleChange} step={1} />g</td>
                    </>
                )
            }
        </tr>        
    );
}

export default FormulaRow; 
