import { useReducer } from "react";
import { Recipe } from "@/types/recipe";
import recipeSelector from "./recipeSelector";
import recipeReducer from "./recipeReducer";

const useRecipe = (initialRecipe: Recipe) => {
    
    const [recipe, dispatch] = useReducer(recipeReducer, initialRecipe);

    const { 
        selectTotalFlourWeight, 
        selectTotalRatio, 
        selectTotalDoughWeight,
    } = recipeSelector(recipe);


    const changePercent = (
        formulaIngredientId: string, 
        percent: number, 
        totalFlourWeight?: number
    ) => {
        dispatch({
            type: "change-percent",
            payload: {
                formulaIngredientId: formulaIngredientId,
                percent: percent,
                totalFlourWeight: totalFlourWeight,
            },
        });
    }

    const changeWeight = (
        formulaIngredientId: string, 
        weight: number, 
        totalFlourWeight: number
    ) => {
        dispatch({
            type: "change-weight",
            payload: {
                formulaIngredientId: formulaIngredientId,
                weight: weight,
                totalFlourWeight: totalFlourWeight,
            },
        });
    }

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
        recipe, 
        selectTotalDoughWeight,
        selectTotalFlourWeight,
        selectTotalRatio,
        changePercent, 
        changeWeight, 
        changeUnitWeight,
        changeUnitQuantity,
        changeWasteFactor,
    };
}

export default useRecipe;
