import { ChangeEvent } from "react";
import { InputMode } from "@/types/recipe";
import { formatNumber } from "@/utils";
import FormulaPercent from "./FormulaPercent";



export type FormulaRowProps = {
    ingredient: { 
        formulaIngredientId: string, 
        name: string, 
        ratio: number, 
        isFlour: boolean 
    }, 
    primaryFlourId?: string,
    selectTotalFlourWeight: number,
    inputMode: InputMode,
    isDoughWeightLocked: boolean,
    changePercent:  (
        formulaIngredientId: string, 
        percent: number, 
        totalFlourWeight?: number,
        primaryFlourId?: string,
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
        primaryFlourId,
        selectTotalFlourWeight, 
        inputMode, 
        isDoughWeightLocked,
        changePercent,
        changeWeight,
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);

        if (inputMode === "percent") {
            if (!isDoughWeightLocked) 
                changePercent(formulaIngredientId, value, selectTotalFlourWeight);
            return changePercent(formulaIngredientId, value, undefined, primaryFlourId);
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
            <FormulaPercent
                formulaIngredientId={formulaIngredientId}
                percent={percent}
                selectTotalFlourWeight={isDoughWeightLocked ? undefined : selectTotalFlourWeight}
                primaryFlourId={isFlour ? primaryFlourId : undefined}
                inputMode={inputMode}
                changePercent={changePercent}
            />
            <td>
                <input 
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
