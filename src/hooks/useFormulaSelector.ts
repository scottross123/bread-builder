import { Formula } from "../types";

const useFormulaSelector = (formula: Formula) => {
    const selectTotalRatio = () => {
        const ingredientList = Object.values(formula.ingredients.byId);
        return ingredientList.reduce(
            (ratioSum, { ratio }) =>
                ratioSum + ratio, 1
            );
    }

    const selectTotalPercentage = () => selectTotalRatio() * 100;

    const selectFlourWeight = () => {
        const totalDoughWeight = formula.totalDoughWeight;
        const totalRatio = selectTotalRatio();
        return Math.round(totalDoughWeight / totalRatio);
    }

    return {
        selectTotalRatio,
        selectTotalPercentage,
        selectFlourWeight,
    }
}

export default useFormulaSelector;