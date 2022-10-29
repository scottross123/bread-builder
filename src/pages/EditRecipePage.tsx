import BreadFormula from "../components/BreadFormula";
import { Ingredient } from "../types";

const ingredients: Ingredient[] = [
    {
        id: "ing1",
        name: "Water",
        ratio: .6
    },
    {
        id: "ing2",
        name: "Salt",
        ratio: .02
    },
    {
        id: "ing3",
        name: "Yeast",
        ratio: .01
    },
]


const EditRecipePage = () => {
    return (
        <div>
            <BreadFormula 
                ingredients={ingredients}
                initialTotalDoughWeight={1630}
            />
        </div>
    );
};

export default EditRecipePage;
