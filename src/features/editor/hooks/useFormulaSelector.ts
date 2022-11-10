import { Formula } from "../../../types/formula";
import { useMemo } from "react";

const useFormulaSelector = (formula: Formula) => {
    const selectTotalDoughWeight = useMemo(() => {
        const { unitQuantity, unitWeight, wasteFactor } = formula;
        return unitQuantity * unitWeight * (wasteFactor + 1);
    }, [formula.unitQuantity, formula.unitWeight, formula.wasteFactor]);


    const selectTotalRatio = useMemo(() => {
        const ingredientList = formula.ingredients.allIds.map((id: string) => formula.ingredients.byId[id]);
        return ingredientList.reduce(
            (ratioSum, { ratio }) =>
                ratioSum + ratio, 1
            );
    }, [formula.ingredients]);

    const selectTotalPercentage = useMemo(() => { 
        return selectTotalRatio * 100;
    }, [formula.ingredients]);

    const selectTotalFlourWeight = useMemo(() => {
        const totalDoughWeight = selectTotalDoughWeight;
        const totalRatio = selectTotalRatio;
        return totalDoughWeight / totalRatio;
    }, [formula]);

    return {
        selectTotalDoughWeight,
        selectTotalRatio,
        selectTotalPercentage,
        selectTotalFlourWeight,
    }
}

export default useFormulaSelector;