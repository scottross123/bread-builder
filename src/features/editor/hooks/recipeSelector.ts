import { Preferment, Recipe } from "@/types/Recipe";
import { formatNumber } from "@/utils";
import { useMemo, useCallback } from "react";

const recipeSelector = (recipe: Recipe) => {
    const selectTotalDoughWeight = useMemo(() => {
        return recipe.unitQuantity * recipe.unitWeight * (recipe.wasteFactor + 1);
    }, [recipe.unitQuantity, recipe.unitWeight, recipe.wasteFactor]);

    const selectFormulaTotalRatio = useCallback((formulaId: string): number => {
         return recipe.entities.formulas.byId[formulaId].formulaIngredientIds
            .map((formulaIngredientId) =>
                recipe.entities.formulaIngredients.byId[formulaIngredientId]
            )
            .reduce((ratioSum, { ratio }) => {
                // console.log("ratuo", ratio)
                return ratioSum + ratio}, 0
            );
    }, [recipe.entities.formulaIngredients]);

    const selectFormulaTotalFlourWeight = useCallback((formulaId: string): number => {
        // console.log("select total flour weight", selectTotalDoughWeight, selectFormulaTotalRatio("overall"))
        if (formulaId === "overall") return selectTotalDoughWeight / selectFormulaTotalRatio(formulaId);
        return (recipe.entities.formulas.byId[formulaId] as Preferment).preFermentedFlour * selectFormulaTotalFlourWeight("overall");
    }, [selectTotalDoughWeight, selectFormulaTotalRatio, recipe.entities.formulas.byId]);
    const selectPreFermentWeight = useCallback((formulaId: string): number => {
        const flourWeight = selectFormulaTotalFlourWeight(formulaId);
        return recipe.entities.formulas.byId[formulaId].formulaIngredientIds
            .reduce((weightSum, formulaIngredientId) => {
                const formulaIngredient = recipe.entities.formulaIngredients.byId[formulaIngredientId]
                return weightSum + formulaIngredient.ratio * flourWeight
            }, 0);
    }, [recipe.entities])

    const selectHydration = useCallback((formulaId: string): number => {
        const formulaIngredients =  recipe.entities.formulaIngredients;
        return formulaIngredients.allIds
            .reduce((ratioSum, formulaIngredientId) => {
                const formulaIngredient = formulaIngredients.byId[formulaIngredientId]; 
                if (formulaIngredient.formulaId === formulaId)
                    return 0;
                return formulaIngredient.ratio
            }, 0)
    }, [])

    return {
        selectTotalDoughWeight,
        selectFormulaTotalRatio,
        selectFormulaTotalFlourWeight,
        selectPreFermentWeight,
    }
}

export default recipeSelector;