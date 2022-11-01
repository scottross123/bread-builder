import BreadFormula from "../components/BreadFormula";
import { Formula, Ingredient } from "../types";
import { useFormulaReducer, useFormulaSelector } from "../hooks";

// const ingredients: Ingredient[] = [
//     {
//         id: "ing1",
//         name: "Water",
//         ratio: .6
//     },
//     {
//         id: "ing2",
//         name: "Salt",
//         ratio: .02
//     },
//     {
//         id: "ing3",
//         name: "Yeast",
//         ratio: .01
//     },
// ]

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
    const { formula, changePercent, changeTotalDoughWeight } = useFormulaReducer(exampleFormula);
    const { selectFlourWeight, selectTotalPercentage, selectTotalRatio } = useFormulaSelector(formula);
    console.log(selectFlourWeight, selectTotalPercentage, selectTotalRatio)
    return (
        <div>
            <BreadFormula 
                formula={formula}
                changePercent={changePercent}
                changeTotalDoughWeight={changeTotalDoughWeight}
            />
        </div>
    );
};

export default EditRecipePage;
