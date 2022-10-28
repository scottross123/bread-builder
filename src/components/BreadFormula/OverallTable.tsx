import { useState } from "react";
import { InputMode } from "./BreadFormula";
import FormulaRow from "./FormulaRow";

type Ingredient = {
    id: string,
    name: string,
    ratio: number
}

const ingredients: Ingredient[] = [
    {
        id: "ing1",
        name: "Water",
        ratio: 60
    },
    {
        id: "ing2",
        name: "Salt",
        ratio: 2
    },
    {
        id: "ing3",
        name: "Yeast",
        ratio: 1
    },
]

type OverallTableProps = {
    inputMode: InputMode
}

const OverallTable = (props: OverallTableProps) => {
    const { inputMode } = props;
    const innerCellStyling = "w-16 inline-block"
    const totalFlourWeight = 1000;

    return (
        <table className="border-collapse border">
            <thead>
                <tr>
                    <th colSpan={3}>Overall Formula</th>
                </tr>
                <tr>
                    <th>Ingredients</th>
                    <th>%</th>
                    <th>grams</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>White Flour</td>
                    <td><p className={innerCellStyling}>100.00</p>%</td>
                    <td>{totalFlourWeight}g</td>
                </tr>

                {
                    ingredients.map((ingredient: Ingredient) => {
                        const { id, name, ratio } = ingredient;
                        return (
                            <FormulaRow
                                key={id}
                                name={name}
                                initialValue={ratio}
                                totalFlourWeight={totalFlourWeight}
                                inputMode={inputMode}
                            />
                        );
                    })
                }
            </tbody>
            <tfoot className="text-left">
                <tr>
                    <th>Totals</th>
                    <th><div className={innerCellStyling}>163.00</div>%</th>
                    <th>1630g</th>
                </tr>
            </tfoot>
        </table>
    );
}

export default OverallTable;