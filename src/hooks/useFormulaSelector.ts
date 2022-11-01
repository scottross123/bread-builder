import { Formula } from "../types";
import { useMemo } from "react";

const useFormulaSelector = (formula: Formula) => {
    const selectTotalRatio = useMemo(() => {
        const ingredientList = Object.values(formula.ingredients.byId);
        return ingredientList.reduce(
            (ratioSum, { ratio }) =>
                ratioSum + ratio, 1
            );
    }, [formula.ingredients.byId]);

    const selectTotalPercentage = () => { 
        console.log("total percentage waas recaaulcauted");
        return selectTotalRatio * 100
    }

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