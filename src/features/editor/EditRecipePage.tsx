import BreadFormula from "./components";
import { Formula, Ingredient } from "@/types/formula";
import { useFormulaReducer, useFormulaSelector } from "./hooks";

const exampleFormula: Formula = {
    unitQuantity: 3,
    unitWeight: 950,
    wasteFactor: .02,
    flours: {
        byId: {
            "fl1": {
                id: "fl1",
                name: "white flour",
                ratio: 1,
            }
        },
        allIds: ["fl1"],
    },
    ingredients: {
        byId: {
            "ing1": {
                id: "ing1",
                name: "water",
                ratio: .6,
            },
            "ing2": {
                id: "ing2",
                name: "salt",
                ratio: .02,
            },
            "ing3": {
                id: "ing3",
                name: "yeast",
                ratio: .01
            }
        },
        allIds: ["ing1", "ing2", "ing3"],
    },
}


const EditRecipePage = () => {
    const { 
        formula, 
        changePercent, 
        changeWeight,
        changeUnitQuantity,
        changeUnitWeight,
        changeWasteFactor,
    } = useFormulaReducer(exampleFormula);
    
    const { 
        selectTotalFlourWeight, 
        selectTotalPercentage, 
        selectTotalDoughWeight,
    } = useFormulaSelector(formula);

    // console.log(selectTotalFlourWeight, selectTotalPercentage)
    return (
        <div>
            <BreadFormula 
                formula={formula}
                changePercent={changePercent}
                changeWeight={changeWeight}
                changeUnitQuantity={changeUnitQuantity}
                changeUnitWeight={changeUnitWeight}
                changeWasteFactor={changeWasteFactor}
                selectTotalFlourWeight={selectTotalFlourWeight}
                selectTotalPercentage={selectTotalPercentage}
                selectTotalDoughWeight={selectTotalDoughWeight}
            />
        </div>
    );
};

export default EditRecipePage;
