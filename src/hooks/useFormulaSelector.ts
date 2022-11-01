import { Formula } from "../types";
import { useMemo } from "react";

const useFormulaSelector = (formula: Formula) => {
    const selectTotalRatio = useMemo(() => {
        const ingredientList = Object.values(formula.ingredients.byId);
        return ingredientList.reduce(
            (ratioSum, { ratio }) =>
                ratioSum + ratio, 1
            );
    }, [formula.ingredients]);

    const selectTotalPercentage = useMemo(() => { 
        return selectTotalRatio * 100
    }, [formula.ingredients]);

    const selectFlourWeight = useMemo(() => {
        const totalDoughWeight = formula.totalDoughWeight;
        const totalRatio = selectTotalRatio;
        return Math.round(totalDoughWeight / totalRatio);
    }, [formula]);

    return {
        selectTotalRatio,
        selectTotalPercentage,
        selectFlourWeight,
    }
}

export default useFormulaSelector;