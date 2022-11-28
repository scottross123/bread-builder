import BreadRecipe from "./components";
import { Recipe } from "@/types/recipe";
import { useRecipe } from "./hooks";

const exampleRecipe: Recipe = {
    unitQuantity: 1,
    unitWeight: 1630,
    wasteFactor: .0,
    entities: {
        ingredients: {
            byId: {
                "ing0": {
                    id: "ing0",
                    name: "bread flour",
                    ingredientCategory: "flour",
                    formulaIngredientIds: ["fi0"],
                },
                "ing05": {
                    id: "ing05",
                    name: "whole wheat flour",
                    ingredientCategory: "flour",
                    formulaIngredientIds: ["fi05"],
                },
                "ing1": {
                    id: "ing1",
                    name: "water",
                    ingredientCategory: "fluid",
                    formulaIngredientIds: ["fi1"],
                },
                "ing2": {
                    id: "ing2",
                    name: "salt",
                    ingredientCategory: "other",
                    formulaIngredientIds: ["fi2"],
                },
                "ing3": {
                    id: "ing3",
                    name: "yeast",
                    ingredientCategory: "other",
                    formulaIngredientIds: ["fi3"],
                }
            },
            allIds: ["ing0", "ing1", "ing05", "ing2", "ing3"],
        },
        formulaIngredients: {
            byId: {
                fi0: {
                    id: "fi0",
                    ingredientId: "ing0",
                    formulaId: "overall",
                    ratio: .8,
                },
                fi05: {
                    id: "fi05",
                    ingredientId: "ing05",
                    formulaId: "overall",
                    ratio: .2,
                },
                fi1: {
                    id: "fi1",
                    ingredientId: "ing1",
                    formulaId: "overall",
                    ratio: .6,
                },
                fi2: {
                    id: "fi2",
                    ingredientId: "ing2",
                    formulaId: "overall",
                    ratio: .02,
                },
                fi3: {
                    id: "fi3",
                    ingredientId: "ing3",
                    formulaId: "overall",
                    ratio: .01
                },
            },
            allIds: ["fi0", "fi05", "fi1", "fi2", "fi3"],
        },
        formulas: {
            byId: {
                overall: {
                    id: "overall",
                    primaryFlourId: "fi0",
                    formulaIngredientIds: ["fi0", "fi05", "fi1", "fi2", "fi3"]
                }
            },
            allIds: ["overall"]
        }
    }
}


const EditRecipePage = () => {
    const { 
        recipe, 
        selectTotalDoughWeight,
        selectTotalFlourWeight,
        selectTotalRatio,
        changePercent, 
        changeWeight,
        changeUnitQuantity,
        changeUnitWeight,
        changeWasteFactor,
    } = useRecipe(exampleRecipe);

    return (
        <div>
            <BreadRecipe 
                recipe={recipe}
                changePercent={changePercent}
                changeWeight={changeWeight}
                changeUnitQuantity={changeUnitQuantity}
                changeUnitWeight={changeUnitWeight}
                changeWasteFactor={changeWasteFactor}
                selectTotalFlourWeight={selectTotalFlourWeight}
                selectTotalRatio={selectTotalRatio}
                selectTotalDoughWeight={selectTotalDoughWeight}
            />
        </div>
    );
};

export default EditRecipePage;
