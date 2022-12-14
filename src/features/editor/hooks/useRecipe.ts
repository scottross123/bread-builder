import { useReducer } from "react";
import { Recipe } from "@/types/Recipe";
import recipeSelector from "./recipeSelector";
import recipeReducer from "./recipeReducer";

const useRecipe = (initialRecipe: Recipe) => {
    
    const [recipe, dispatch] = useReducer(recipeReducer, initialRecipe);

    const { 
        selectFormulaTotalFlourWeight, 
        selectFormulaTotalRatio, 
        selectTotalDoughWeight,
        selectPreFermentWeight,
    } = recipeSelector(recipe);


    const changePercent = (
        formulaIngredientId: string, 
        percent: number, 
        totalFlourWeight?: number,
        primaryFlourId?: string,
    ) => {
        dispatch({
            type: "change-percent",
            payload: {
                formulaIngredientId: formulaIngredientId,
                percent: isNaN(percent) ? 0 : percent,
                totalFlourWeight: totalFlourWeight,
                primaryFlourId: primaryFlourId,
            },
        });
    }

    const changeWeight = (
        formulaIngredientId: string, 
        weight: number, 
        totalFlourWeight: number,
        isFlour?: boolean
    ) => {
        dispatch({
            type: "change-weight",
            payload: {
                formulaIngredientId: formulaIngredientId,
                weight: isNaN(weight) ? 0 : weight,
                totalFlourWeight: totalFlourWeight,
                isFlour: isFlour,
            },
        });
    }

    const changeUnitWeight = (newUnitWeight: number) => {
        dispatch({
            type: "change-unit-weight",
            payload: isNaN(newUnitWeight) ? 0 : newUnitWeight,
        });
    }

    const changeUnitQuantity = (newUnitQuantity: number) => {
        dispatch({
            type: "change-unit-qty",
            payload: isNaN(newUnitQuantity) ? 0 : newUnitQuantity,
        });
    }

    const changeWasteFactor = (newWasteFactor: number) => {
        dispatch({
            type: "change-waste-factor",
            payload: newWasteFactor, // broke
        });
    }

    const changePff = (formulaId: string, newPFF: number) => {
        dispatch({
            type: "change-pff",
            payload: { 
                formulaId: formulaId, 
                preFermentedFlour: newPFF 
            },
        });
    }
    
    return { 
        recipe, 
        selectTotalDoughWeight,
        selectFormulaTotalFlourWeight,
        selectFormulaTotalRatio,
        selectPreFermentWeight,
        changePercent, 
        changeWeight, 
        changeUnitWeight,
        changeUnitQuantity,
        changeWasteFactor,
        changePff,
    };
}

export default useRecipe;
