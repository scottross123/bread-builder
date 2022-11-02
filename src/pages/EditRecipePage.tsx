import BreadFormula from "../components/BreadFormula";
import { Formula, Ingredient } from "../types";
import { useFormulaReducer, useFormulaSelector } from "../hooks";

const exampleFormula: Formula = {
    totalDoughWeight: 1630,
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
        changeTotalDoughWeight 
    } = useFormulaReducer(exampleFormula);
    
    const { 
        selectTotalFlourWeight, 
        selectTotalPercentage, 
    } = useFormulaSelector(formula);

    // console.log(selectTotalFlourWeight, selectTotalPercentage)
    return (
        <div>
            <BreadFormula 
                formula={formula}
                changePercent={changePercent}
                changeWeight={changeWeight}
                changeTotalDoughWeight={changeTotalDoughWeight}
                selectTotalFlourWeight={selectTotalFlourWeight}
                selectTotalPercentage={selectTotalPercentage}
            />
        </div>
    );
};

export default EditRecipePage;
