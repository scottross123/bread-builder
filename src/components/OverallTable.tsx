import { Ingredient, InputMode } from "../types";
import FormulaRow from "./FormulaRow";

type OverallTableProps = {
    ingredients: Ingredient[],
    inputMode: InputMode,
    totalDoughWeight: number
}

const OverallTable = (props: OverallTableProps) => {
    const { ingredients, inputMode, totalDoughWeight } = props;
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