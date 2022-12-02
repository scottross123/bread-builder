import { ChangeEvent } from "react";
import { InputMode } from "@/types/recipe";
import { formatNumber } from "@/utils";
import FormulaPercent from "./FormulaPercent";
import FormulaWeight from "./FormulaWeight";
import Cell from "./Cell";



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

    const percent = ratio * 100;
    const weight = ratio * selectTotalFlourWeight;
    console.log("weight", ratio, selectTotalFlourWeight, weight)
    
    return (
        <tr>
            <FormulaPercent
                formulaIngredientId={formulaIngredientId}
                percent={percent}
                selectTotalFlourWeight={isDoughWeightLocked ? undefined : selectTotalFlourWeight}
                primaryFlourId={isFlour ? primaryFlourId : undefined}
                inputMode={inputMode}
                changePercent={changePercent}
            />
            <FormulaWeight
                formulaIngredientId={formulaIngredientId}
                weight={weight}
                selectTotalFlourWeight={selectTotalFlourWeight}
                isFlour={isFlour}
                inputMode={inputMode}
                changeWeight={changeWeight}
            />
        </tr>        
    );
}

export default FormulaRow; 
