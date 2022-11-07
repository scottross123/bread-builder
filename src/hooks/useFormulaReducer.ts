import { useReducer } from "react";
import { Formula } from "../types";

type FormulaAction = 
    | { type: "change-percent", payload: { id: string, percent: number, totalFlourWeight?: number } }
    | { type: "change-weight", payload: { id: string, weight: number, totalFlourWeight: number } }
    | { type: "change-tdw", payload: number };

const useFormulaReducer = (initialFormula: Formula) => {

    const formulaReducer = (formula: Formula, action: FormulaAction) => {
        const { type, payload } = action;
        
        switch (type) {
            case "change-percent": {
                const { id, percent, totalFlourWeight } = payload;

                const ingredients = formula.ingredients;
                const byId = formula.ingredients.byId;
                const ingredientById = formula.ingredients.byId[id];
                const newRatio = percent / 100;
                if (totalFlourWeight) {
                    const totalDoughWeight = formula.totalDoughWeight;
                    const weight = percent * totalFlourWeight / 100;
                    const weightDifference = ingredientById.ratio * totalFlourWeight - weight;
                    return {
                        ...formula,
                        ingredients: {
                            ...ingredients,
                            byId: {
                                ...byId,
                                [id]: {
                                    ...ingredientById,
                                    ratio: newRatio,
                                },
                            },
                        },
                        totalDoughWeight: totalDoughWeight - weightDifference,
                    }
                }

                return {
                    ...formula,
                    ingredients: {
                        ...ingredients,
                        byId: {
                            ...byId,
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
                console.log("new weight", weight)

                const totalDoughWeight = formula.totalDoughWeight;
                const ingredients = formula.ingredients;
                const byId = formula.ingredients.byId;
                const ingredientById = formula.ingredients.byId[id];

                // console.log("total flour weight", totalFlourWeight);
                // console.log("current percent", ingredientById.ratio * totalFlourWeight)
                const weightDifference = ingredientById.ratio * totalFlourWeight - weight;

                // console.log("weight diff", weightDifference)
                
                return {
                    ...formula,
                    ingredients: {
                        ...ingredients,
                        byId: {
                            ...byId,
                            [id]: {
                                ...ingredientById,
                                ratio: weight / totalFlourWeight,
                            }
                        },
                    },
                    totalDoughWeight: totalDoughWeight - weightDifference,
                }
            }
            case "change-tdw": {
                const totalDoughWeight = payload;
                return {
                    ...formula,
                    totalDoughWeight: totalDoughWeight
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

    const changeTotalDoughWeight = (newTotalDoughWeight: number) => {
        console.log("new", newTotalDoughWeight)
        dispatch({
            type: "change-tdw",
            payload: newTotalDoughWeight
        });
        console.log("form", formula)
    }
    
    return { formula, changePercent, changeWeight, changeTotalDoughWeight };
}

export default useFormulaReducer;
