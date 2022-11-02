import { Formula } from "../types";
import { formatNumber } from "../utils";
import { useMemo } from "react";

const useFormulaSelector = (formula: Formula) => {
    const selectTotalRatio = useMemo(() => {
        const ingredientList = Object.values(formula.ingredients.byId);
        return formatNumber(ingredientList.reduce(
            (ratioSum, { ratio }) =>
                ratioSum + ratio, 1
            ));
    }, [formula.ingredients]);

    const selectTotalPercentage = useMemo(() => { 
        return formatNumber(selectTotalRatio * 100);
    }, [formula.ingredients]);

    const selectTotalFlourWeight = useMemo(() => {
        const totalDoughWeight = formula.totalDoughWeight;
        const totalRatio = selectTotalRatio;
        return formatNumber(totalDoughWeight / totalRatio);
    }, [formula]);

    return {
        selectTotalRatio,
        selectTotalPercentage,
        selectTotalFlourWeight,
    }
}

export default useFormulaSelector;