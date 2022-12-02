import { Recipe } from "@/types/Recipe";
import { formatNumber } from "@/utils";
import { useMemo, useCallback } from "react";

const recipeSelector = (recipe: Recipe) => {
    const selectTotalDoughWeight = useMemo(() => {
        return recipe.unitQuantity * recipe.unitWeight * (recipe.wasteFactor + 1);
    }, [recipe.unitQuantity, recipe.unitWeight, recipe.wasteFactor]);

    const selectTotalRatio = useCallback((formulaId: string) => {
         return recipe.entities.formulas.byId[formulaId].formulaIngredientIds
            .map((formulaIngredientId) =>
                recipe.entities.formulaIngredients.byId[formulaIngredientId]
            )
            .reduce((ratioSum, { ratio }) => {
                // console.log("ratuo", ratio)
                return ratioSum + ratio}, 0
            );
    }, [recipe.entities.formulaIngredients]);

    const selectTotalFlourWeight = useCallback((formulaId: string) => {
        // console.log("select total flour weight", selectTotalDoughWeight, selectTotalRatio("overall"))
        return selectTotalDoughWeight / selectTotalRatio(formulaId);
    }, [selectTotalDoughWeight, selectTotalRatio]);

    return {
        selectTotalDoughWeight,
        selectTotalRatio,
        selectTotalFlourWeight,
    }
}

export default recipeSelector;