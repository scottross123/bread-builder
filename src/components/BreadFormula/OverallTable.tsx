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

type OverallTableProps = {
    inputMode: InputMode,
    totalDoughWeight: number
}

const OverallTable = (props: OverallTableProps) => {
    const { inputMode, totalDoughWeight } = props;
    const innerCellStyling = "w-16 inline-block"
    const totalRatio = ingredients.reduce((ratioSum, { ratio }) => ratioSum + ratio, 1);
    const totalPercentage = totalRatio * 100;
    const totalFlourWeight = Math.round(totalDoughWeight / totalRatio);

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
                                ratio={ratio}
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
                    <th><p className={innerCellStyling}>{totalPercentage}</p>%</th>
                    <th>{totalDoughWeight}g</th>
                </tr>
            </tfoot>
        </table>
    );
}

export default OverallTable;