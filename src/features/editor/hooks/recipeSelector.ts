import { Recipe } from "@/types/recipe";
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
            .reduce((ratioSum, { ratio }) =>
                ratioSum + ratio, 0
            );
    }, [recipe.entities.formulaIngredients]);

    const selectTotalFlourWeight = useMemo(() => {
        return selectTotalDoughWeight / selectTotalRatio("overall");
    }, [selectTotalDoughWeight, selectTotalRatio]);

    return {
        selectTotalDoughWeight,
        selectTotalRatio,
        selectTotalFlourWeight,
    }
}

export default recipeSelector;