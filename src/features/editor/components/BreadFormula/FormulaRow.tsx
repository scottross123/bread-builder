import { FormulaIngredient } from "@/types";
import { formatNumber } from "@/utils";
import FormulaPercent from "./FormulaPercent";
import FormulaWeight from "./FormulaWeight";
import Cell from "../../../../components/Cell";
import { FormulaTableProps } from "./FormulaTable";



export type FormulaRowProps = {
    formulaIngredient: FormulaIngredient,
    primaryFlourId: string,
    totalFlourWeight: number,
    isFlour: boolean,
} & Pick<FormulaTableProps, | "changePercent" | "changeWeight" | "whichWeightConstant" | "inputMode">;

const FormulaRow = (props: FormulaRowProps) => {
    const {
        formulaIngredient, 
        primaryFlourId,
        totalFlourWeight,
        isFlour, 
        inputMode, 
        whichWeightConstant,
        changePercent,
        changeWeight,
    } = props;

    const percent = formulaIngredient.ratio * 100;
    const weight = formulaIngredient.ratio * totalFlourWeight;
    //console.log("weight", formulaIngredient.ratio, totalFlourWeight, weight)
    
    return (
        <tr>
            <FormulaPercent
                formulaIngredientId={formulaIngredient.id}
                percent={percent}
                selectFormulaTotalFlourWeight={whichWeightConstant === "dough" ? undefined : totalFlourWeight}
                primaryFlourId={isFlour ? primaryFlourId : undefined}
                inputMode={inputMode}
                changePercent={changePercent}
            />
            <FormulaWeight
                formulaIngredientId={formulaIngredient.id}
                weight={weight}
                selectFormulaTotalFlourWeight={totalFlourWeight}
                isFlour={isFlour}
                inputMode={inputMode}
                changeWeight={changeWeight}
            />
        </tr>        
    );
}

export default FormulaRow; 
