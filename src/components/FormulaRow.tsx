import { ChangeEvent } from "react";
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
        if (inputMode === "percent") return changePercent(id, value);
        if (inputMode === "weight") return changeWeight(id, value);
    }
    
    // const [value, setValue] = useState(inputMode === "percent" ?  formatNumber(ratio * 100) : formatNumber(ratio * selectTotalFlourWeight)); 
    const value = inputMode === "percent" ?  formatNumber(ratio * 100) : formatNumber(ratio * selectTotalFlourWeight); 

    return (
        <tr>
            <td>{name}</td>
            {
                inputMode === "percent" ? (
                    <>
                        <td><input className={innerCellStyling} type="number" value={value} onChange={handleChange} step="any" />%</td>
                        <td><input className={innerCellStyling} type="number" value={formatNumber(value * selectTotalFlourWeight / 100)} readOnly step="any" />g</td>
                    </>
                ) : (
                    <>
                        <td><input className={innerCellStyling} type="number" value={formatNumber(value / selectTotalFlourWeight * 100)} readOnly step="any" />%</td>
                        <td><input className={innerCellStyling} type="number" value={value} onChange={handleChange} step={1} />g</td>
                    </>
                )
            }
        </tr>        
    );
}

export default FormulaRow; 
