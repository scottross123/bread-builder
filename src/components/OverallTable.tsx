import { Ingredient, InputMode } from "../types";
import FormulaRow from "./FormulaRow";

type OverallTableProps = {
    ingredients: Ingredient[],
    flours: Ingredient[],
    inputMode: InputMode,
    totalDoughWeight: number,
    changePercent: (id: string, newPercent: number) => void
}

const OverallTable = (props: OverallTableProps) => {
    const { ingredients, flours, inputMode, totalDoughWeight, changePercent } = props;
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
                {
                    flours.map((ingredient: Ingredient) => {
                        const { id, name, ratio } = ingredient;
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{ratio * 100}</td>
                                <td>{ratio * totalFlourWeight}</td>
                            </tr>
                        );
                    })
                }

                {
                    ingredients.map((ingredient: Ingredient) => {
                        const { id, name, ratio } = ingredient;
                        return (
                            <FormulaRow
                                key={id}
                                id={id}
                                name={name}
                                ratio={ratio}
                                totalFlourWeight={totalFlourWeight}
                                inputMode={inputMode}
                                changePercent={changePercent}
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