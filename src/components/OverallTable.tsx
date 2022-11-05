import { Ingredient, InputMode } from "../types";
import { formatNumber } from "../utils";
import FormulaRow from "./FormulaRow";

type OverallTableProps = {
    ingredients: Ingredient[],
    flours: Ingredient[],
    inputMode: InputMode,
    totalDoughWeight: number,
    changePercent: (id: string, newPercent: number) => void,
    changeWeight: (id: string, newWeight: number) => void,
    selectTotalFlourWeight: number,
    selectTotalPercentage: number,    
}

const OverallTable = (props: OverallTableProps) => {
    const { 
        ingredients, 
        flours, 
        inputMode, 
        totalDoughWeight, 
        changePercent,
        changeWeight,
        selectTotalFlourWeight,
        selectTotalPercentage,
    } = props;
    const innerCellStyling = "w-16 inline-block";


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
                                <td>{formatNumber(ratio * selectTotalFlourWeight)}</td>
                            </tr>
                        );
                    })
                }

                {
                    ingredients.map((ingredient: Ingredient) => {
                        return (
                            <FormulaRow
                                key={ingredient.id}
                                ingredient={ingredient}
                                selectTotalFlourWeight={selectTotalFlourWeight}
                                inputMode={inputMode}
                                changePercent={changePercent}
                                changeWeight={changeWeight}
                            />
                        );
                    })
                }
            </tbody>
            <tfoot className="text-left">
                <tr>
                    <th>Totals</th>
                    <th><p className={innerCellStyling}>{formatNumber(selectTotalPercentage)}</p>%</th>
                    <th>{formatNumber(totalDoughWeight)}g</th>
                </tr>
            </tfoot>
        </table>
    );
}

export default OverallTable;