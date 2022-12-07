import BreadFormula from "../components/BreadFormula";
import { Recipe } from "@/types/Recipe";
import { useRecipe } from "../hooks";
import EditorLayout from "../components/EditorLayout";
import FormulaControls from "../components/FormulaControls";

const exampleRecipe: Recipe = {
    unitQuantity: 1,
    unitWeight: 1630,
    wasteFactor: .0, // TODO fix waste factor messing up calculation 
    entities: {
        ingredients: {
            byId: {
                "ing0": {
                    id: "ing0",
                    name: "Bread Flour",
                    ingredientCategory: "flour",
                    formulaIngredientIds: ["fi0"],
                },
                "ing05": {
                    id: "ing05",
                    name: "Whole Wheat Flour",
                    ingredientCategory: "flour",
                    formulaIngredientIds: ["fi05", "fi4"],
                },
                "ing1": {
                    id: "ing1",
                    name: "Water",
                    ingredientCategory: "fluid",
                    formulaIngredientIds: ["fi1", "fi5"],
                },
                "ing2": {
                    id: "ing2",
                    name: "Salt",
                    ingredientCategory: "other",
                    formulaIngredientIds: ["fi2"],
                },
                "ing3": {
                    id: "ing3",
                    name: "Yeast",
                    ingredientCategory: "other",
                    formulaIngredientIds: ["fi3", "fi6"],
                }
            },
            allIds: ["ing0", "ing05", "ing1", "ing2", "ing3"],
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
                fi4: {
                    id: "fi4",
                    ingredientId: "ing05",
                    formulaId: "pf1",
                    ratio: 1,
                },
                fi5: {
                    id: "fi5",
                    ingredientId: "ing1",
                    formulaId: "pf1",
                    ratio: 1,
                },
                fi6: {
                    id: "fi6",
                    ingredientId: "ing3",
                    formulaId: "pf1",
                    ratio: .002,
                }
            },
            allIds: ["fi0", "fi05", "fi1", "fi2", "fi3"],
        },
        formulas: {
            byId: {
                overall: {
                    id: "overall",
                    name: "Overall Formula",
                    primaryFlourId: "fi0",
                    formulaIngredientIds: ["fi0", "fi05", "fi1", "fi2", "fi3"]
                },
                pf1: {
                    id: "pf1",
                    name: "Poolish",
                    preFermentedFlour: .15,
                    primaryFlourId: "fi4",
                    formulaIngredientIds: ["fi4", "fi5", "fi6"],
                }
            },
            allIds: ["overall", "pf1"]
        }
    }
}


const EditRecipePage = () => {
    const { 
        recipe, 
        selectTotalDoughWeight,
        selectFormulaTotalFlourWeight,
        selectFormulaTotalRatio,
        selectPreFermentWeight,
        changePercent, 
        changeWeight,
        changeUnitQuantity,
        changeUnitWeight,
        changeWasteFactor,
    } = useRecipe(exampleRecipe);

    return (
        <EditorLayout>
            <>
            <FormulaControls 
                unitQuantity={recipe.unitQuantity}
                unitWeight={recipe.unitWeight}
                changeUnitQuantity={changeUnitQuantity}
                changeUnitWeight={changeUnitWeight}
            />
            <BreadFormula 
                recipe={recipe}
                changePercent={changePercent}
                changeWeight={changeWeight}
                changeUnitQuantity={changeUnitQuantity}
                changeUnitWeight={changeUnitWeight}
                changeWasteFactor={changeWasteFactor}
                selectFormulaTotalFlourWeight={selectFormulaTotalFlourWeight}
                selectFormulaTotalRatio={selectFormulaTotalRatio}
                selectTotalDoughWeight={selectTotalDoughWeight}
                selectPreFermentWeight={selectPreFermentWeight}
            />
            </>
        </EditorLayout>
    );
};

export default EditRecipePage;
