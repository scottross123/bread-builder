import { Ingredient, Table } from "@/types";
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
                <tr >
                    <Cell heading colSpan={2}>Ingredients</Cell>
                </tr>
                <tr>
                    <Cell colSpan={2}>why wont this work</Cell>
                </tr>
            </thead>
            <tbody>
            {
                ingredientsList.map((ingredient) => 
                    <tr key={ingredient.id}>
                        <Cell><button>X</button></Cell>
                        <Cell>{ingredient.name}</Cell>
                    </tr>
                )
            }
            </tbody>

            <tfoot>
                <tr>
                    <Cell heading colSpan={2}>
                        Totals
                    </Cell>
                </tr>
            </tfoot>
        </table>
    )
}

export default Ingredients;