import { Formula } from "../types";

type ActionType = "change-percent" | "change-weight";

type FormulaAction = {
    type: ActionType;
    payload: any;
}

type FormulaState = Formula;

export const useFormula = () => {
    
    const formulaReducer = (formula: FormulaState, action: FormulaAction) => {
        const { type, payload } = action;
        
        switch (type) {
            case "change-percent": {
                const { id, percent } = payload;
                const ingredientToUpdate = formula.ingredients.byId[id];
                return {
                    ...formula,
                    ingredients: {
                        ...formula.ingredients,
                        byId: {
                            ingredientToUpdate: {
                                ...ingredientToUpdate,
                                ratio: percent / 100,
                            }
                        }
                    }
                }
            }
            case "change-weight": {
                return 
            }
        }
    }
}