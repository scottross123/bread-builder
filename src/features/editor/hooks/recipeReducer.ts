import { FormulaIngredient, IngredientCategory, Recipe } from "@/types/recipe";
import { getUniqueId } from "@/utils";

type RecipeAction = 
    | { type: "change-percent",
        payload: { 
            formulaIngredientId: string, 
            percent: number, 
            totalFlourWeight?: number,
            primaryFlourId?: string,
        } }
    | { type: "change-weight", 
        payload: { 
            formulaIngredientId: string, 
            weight: number, 
            totalFlourWeight: number, 
            isFlour?: boolean 
        } }
    | { type: "change-unit-weight", payload: number }
    | { type: "change-unit-qty", payload: number }
    | { type: "change-waste-factor", payload: number }
    | { type: "add-ingredient", 
        payload: { 
            name: string, 
            ratio: number, 
            formulaId: "overall" | string, 
            ingredientCategory: IngredientCategory 
        } }
    | { type: "remove-ingredient", payload: string };

const recipeReducer = (recipe: Recipe, action: RecipeAction): Recipe => {
    const { type, payload } = action;

    switch (type) {
        case "change-percent": {
            const { 
                formulaIngredientId, 
                percent, 
                totalFlourWeight,
                primaryFlourId, 
            } = payload;
            const formulaIngredientById = recipe.entities.formulaIngredients.byId[formulaIngredientId];
            const newRatio = percent / 100;

            const newRecipeState =  {               
                ...recipe,
                entities: {
                    ...recipe.entities,
                    formulaIngredients: {
                        ...recipe.entities.formulaIngredients,
                        byId: {
                            ...recipe.entities.formulaIngredients.byId,
                            [formulaIngredientId]: {
                                ...recipe.entities.formulaIngredients.byId[formulaIngredientId],
                                ratio: newRatio,
                            }
                        }
                    } 
                }
            };

            if (primaryFlourId) {
                const primaryFlour = newRecipeState.entities.formulaIngredients.byId[primaryFlourId];
                const ratioDifference = formulaIngredientById.ratio - newRatio;
                return {
                    ...newRecipeState,
                    entities: {
                        ...newRecipeState.entities,
                        formulaIngredients: {
                            ...newRecipeState.entities.formulaIngredients,
                            byId: {
                                ...newRecipeState.entities.formulaIngredients.byId,
                                [primaryFlourId]: {
                                    ...primaryFlour,
                                    ratio: primaryFlour.ratio + ratioDifference,
                                }
                            }
                        }
                    }
                };
            }

            if (totalFlourWeight) {
                const weight = percent * totalFlourWeight / 100;
                const weightDifference = formulaIngredientById.ratio * totalFlourWeight - weight;
                return {
                    ...newRecipeState,
                    unitWeight: recipe.unitWeight - (weightDifference / recipe.unitQuantity),
                };
            }

            return { ...newRecipeState };
        } 

        case "change-weight": {
            const { 
                formulaIngredientId, 
                weight, 
                totalFlourWeight,
                isFlour, 
            } = payload;
            const formulaIngredientById = recipe.entities.formulaIngredients.byId[formulaIngredientId];
            const weightDifference = formulaIngredientById.ratio * totalFlourWeight - weight;
            const newUnitWeight = recipe.unitWeight - (weightDifference / recipe.unitQuantity)

            if (isFlour) {
                const newRecipeState = recipe.entities.formulaIngredients.allIds
                    .reduce((previousState, id) => {
                        const formulaIngredient: FormulaIngredient = recipe.entities.formulaIngredients.byId[id]; 
                        console.log("weight", weightDifference)
                        console.log("tfl - wd", (totalFlourWeight - weightDifference))
                        return {
                            ...previousState,
                            [id]: {
                                ...formulaIngredient,
                                ratio: (formulaIngredient.ratio * totalFlourWeight) / (totalFlourWeight - weightDifference),
                            }
                        }
                    }, {});

                return {
                    ...recipe,
                    unitWeight: newUnitWeight,
                    entities: {
                        ...recipe.entities,
                        formulaIngredients: {
                            ...recipe.entities.formulaIngredients,
                            byId: {
                                ...newRecipeState
                            }
                        }
                    } 
                }
            }
            
            console.log(totalFlourWeight)

            return {               
                ...recipe,
                unitWeight: newUnitWeight,
                entities: {
                    ...recipe.entities,
                    formulaIngredients: {
                        ...recipe.entities.formulaIngredients,
                        byId: {
                            ...recipe.entities.formulaIngredients.byId,
                            [formulaIngredientId]: {
                                ...recipe.entities.formulaIngredients.byId[formulaIngredientId],
                                ratio: weight / totalFlourWeight,
                            }
                        }
                    } 
                }
            }
        }

        case "change-unit-weight": {
            const unitWeight = payload;

            return {
                ...recipe,
                unitWeight: unitWeight,
            }
        }
        case "change-unit-qty": {
            const unitQuantity = payload;

            return {
                ...recipe,
                unitQuantity: unitQuantity
            }
        }
        case "change-waste-factor": {
            const wasteFactor = payload;

            return {
                ...recipe,
                wasteFactor: wasteFactor / 100,
            }

        }

        case "add-ingredient": {
            const { name, ratio, formulaId, ingredientCategory } = payload;
            const ingredientId = getUniqueId();
            const formulaIngredientId = getUniqueId();

            return {
                ...recipe,
                entities: {
                    ingredients: {
                        byId: {
                            ...recipe.entities.ingredients.byId,
                            [ingredientId]: {
                                id: ingredientId,
                                name: name,
                                ingredientCategory: ingredientCategory,
                                formulaIngredientIds: [...recipe.entities.ingredients.byId[ingredientId].formulaIngredientIds, formulaIngredientId],
                            }
                        },
                        allIds: [...recipe.entities.ingredients.allIds, ingredientId]
                    },
                    formulaIngredients: {
                        byId: {
                            ...recipe.entities.formulaIngredients.byId,
                            [formulaIngredientId]: {
                                id: formulaIngredientId,
                                ingredientId: ingredientId,
                                formulaId: formulaId,
                                ratio: ratio,
                            }
                        },
                        allIds: [...recipe.entities.formulaIngredients.allIds, formulaId]
                    },
                    formulas: {
                        ...recipe.entities.formulas,
                        byId: {
                            ...recipe.entities.formulas.byId,
                            [formulaId]: {
                                ...recipe.entities.formulas.byId.formulaId,
                                formulaIngredientIds: [...recipe.entities.formulas.byId.formulaId.formulaIngredientIds, formulaIngredientId]
                            }
                        }
                    }
                }
            }
        }
    }
    return recipe; 
}

export default recipeReducer;