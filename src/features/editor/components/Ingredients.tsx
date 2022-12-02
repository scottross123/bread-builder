import { Ingredient, Table } from "@/types/recipe";
import Cell from "./Cell";

type IngredientsProps = {
    ingredients: Table<Ingredient>
}

const Ingredients = (props: IngredientsProps) => {
    const { ingredients } = props;
    const ingredientsList = ingredients.allIds.map((id) => ingredients.byId[id]);

    return(
        <table className="border-collapse text-left">
            <thead>
                <tr>
                    <Cell heading colSpan={2} rowSpan={2}>Ingredients</Cell>
                </tr>
            </thead>
            <tbody>
            {
                ingredientsList.map((ingredient) => 
                    <tr key={ingredient.id}>
                        <Cell>X</Cell>
                        <Cell>{ingredient.name}</Cell>
                    </tr>
                )
            }
                <tr>
                    <Cell heading colSpan={2}>
                        Totals
                    </Cell>
                </tr>
            </tbody>
        </table>
    )
}

export default Ingredients;