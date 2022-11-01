import { useReducer } from "react";
import { Formula } from "../types";

type ActionType = "change-percent" | "change-weight" | "change-tdw";

type FormulaAction = {
    type: ActionType;
    payload: any;
}

const useFormulaReducer = (initialFormula: Formula) => {

    const formulaReducer = (formula: Formula, action: FormulaAction) => {
        const { type, payload } = action;
        
        switch (type) {
            case "change-percent": {
                const { id, percent } = payload;
                const ingredients = formula.ingredients;
                const byId = formula.ingredients.byId;
                const ingredientById = formula.ingredients.byId[id];
                return {
                    ...formula,
                    ingredients: {
                        ...ingredients,
                        byId: {
                            ...byId,
                            [id]: {
                                ...ingredientById,
                                ratio: percent / 100,
                            }
                        },
                    }
                }
            } 
            // case "change-weight": {
            //     const { id, weight } = payload;
            //     const ingredients = formula.ingredients;
            //     const byId = formula.ingredients.byId;
            //     const ingredientById = formula.ingredients.byId[id];
            //     const totalFlourWeight = 
            //     return {
                    
            //     }
            // }
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

    const changePercent = (id: string, newPercent: number) => {
        dispatch({
            type: "change-percent",
            payload: {
                id: id,
                percent: newPercent,
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
    
    return { formula, changePercent, changeTotalDoughWeight };
}

export default useFormulaReducer;