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
        return selectTotalRatio * 100;
    }, [formula.ingredients]);

    const selectTotalFlourWeight = useMemo(() => {
        const totalDoughWeight = formula.totalDoughWeight;
        const totalRatio = selectTotalRatio;
        return totalDoughWeight / totalRatio;
    }, [formula]);

    return {
        selectTotalRatio,
        selectTotalPercentage,
        selectTotalFlourWeight,
    }
}

export default useFormulaSelector;