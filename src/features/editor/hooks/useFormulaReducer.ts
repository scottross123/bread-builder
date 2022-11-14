import { useReducer } from "react";
import { Recipe, Ingredient } from "@/types/recipe";

type FormulaAction = 
    | { type: "change-percent", payload: { id: string, percent: number, totalFlourWeight?: number } }
    | { type: "change-weight", payload: { id: string, weight: number, totalFlourWeight: number } }
    | { type: "change-tdw", payload: number }
    | { type: "change-unit-weight", payload: number }
    | { type: "change-unit-qty", payload: number }
    | { type: "change-waste-factor", payload: number }
    | { type: "add-ingredient", payload: Ingredient }
    | { type: "remove-ingredient", payload: string }

const useFormulaReducer = (initialFormula: Recipe) => {

    const formulaReducer = (formula: Recipe, action: FormulaAction) => {
        const { type, payload } = action;

        const ingredients = formula.ingredients;
        const ingredientsById = formula.ingredients.byId;
        const ingredientsAllIds = formula.ingredients.allIds;
        const totalDoughWeight = formula.unitQuantity * formula.unitWeight * (formula.wasteFactor + 1);
        
        switch (type) {
            case "change-percent": {
                const { id, percent, totalFlourWeight } = payload;
                const ingredientById = formula.ingredients.byId[id];
                const newRatio = percent / 100;

                if (totalFlourWeight) {
                    const weight = percent * totalFlourWeight / 100;
                    const weightDifference = ingredientById.ratio * totalFlourWeight - weight;
                    return {
                        ...formula,
                        unitWeight: formula.unitWeight - (weightDifference / formula.unitQuantity),
                        ingredients: {
                            ...ingredients,
                            byId: {
                                ...ingredientsById,
                                [id]: {
                                    ...ingredientById,
                                    ratio: newRatio,
                                },
                            },
                        },
                    }
                }

                return {
                    ...formula,
                    ingredients: {
                        ...ingredients,
                        byId: {
                            ...ingredientsById,
                            [id]: {
                                ...ingredientById,
                                ratio: newRatio,
                            }
                        },
                    }
                }
            } 
            case "change-weight": {
                const { id, weight, totalFlourWeight } = payload;
                const ingredientById = formula.ingredients.byId[id];
                const weightDifference = ingredientById.ratio * totalFlourWeight - weight;
                
                return {
                    ...formula,
                    unitWeight: formula.unitWeight + (weightDifference / formula.unitQuantity),
                    ingredients: {
                        ...ingredients,
                        byId: {
                            ...ingredientsById,
                            [id]: {
                                ...ingredientById,
                                ratio: weight / totalFlourWeight,
                            }
                        },
                    },
                }
            }
            case "change-unit-weight": {
                const unitWeight = payload;

                return {
                    ...formula,
                    unitWeight: unitWeight,
                }
            }
            case "change-unit-qty": {
                const unitQuantity = payload;

                return {
                    ...formula,
                    unitQuantity: unitQuantity
                }
            }
            case "change-waste-factor": {
                const wasteFactor = payload;

                return {
                    ...formula,
                    wasteFactor: wasteFactor / 100,
                }

            }
            case "add-ingredient": {
                const ingredient = payload;

                return {
                    ...formula,
                    ingredients: {
                        ...ingredients,
                        byId: {
                            ...ingredientsById,
                            ingredient,
                        },
                        allIds: [ingredient.id, ...ingredientsAllIds].sort((a, b) => ingredientsById[a].ratio - ingredientsById[b].ratio)
                    }
                }
            }
            case "remove-ingredient": {
                const id = payload;

                return {
                    ...formula,
                    ingredients: {
                        ...ingredients,
                        byId: {
                            ...ingredientsById,
          
                        },
                    },
                }
            }
        }
        return formula; 
    }
    
    const [formula, dispatch] = useReducer(formulaReducer, initialFormula);

    const changePercent = (id: string, percent: number, totalFlourWeight?: number) => {
        dispatch({
            type: "change-percent",
            payload: {
                id: id,
                percent: percent,
                totalFlourWeight: totalFlourWeight,
            },
        });
    }

    const changeWeight = (id: string, weight: number, totalFlourWeight: number) => {
        dispatch({
            type: "change-weight",
            payload: {
                id: id,
                weight: weight,
                totalFlourWeight: totalFlourWeight,
            },
        });
    }

    /*const changeTotalDoughWeight = (newTotalDoughWeight: number) => {
        console.log("new", newTotalDoughWeight)
        dispatch({
            type: "change-tdw",
            payload: newTotalDoughWeight
        });
        console.log("form", formula)
    }*/

    const changeUnitWeight = (newUnitWeight: number) => {
        dispatch({
            type: "change-unit-weight",
            payload: newUnitWeight,
        });
    }

    const changeUnitQuantity = (newUnitQuantity: number) => {
        dispatch({
            type: "change-unit-qty",
            payload: newUnitQuantity,
        });
    }

    const changeWasteFactor = (newWasteFactor: number) => {
        dispatch({
            type: "change-waste-factor",
            payload: newWasteFactor,
        });
    }
    
    return { 
        formula, 
        changePercent, 
        changeWeight, 
        changeUnitWeight,
        changeUnitQuantity,
        changeWasteFactor,
    };
}

export default useFormulaReducer;
