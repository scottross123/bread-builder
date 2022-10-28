import { ChangeEvent, useState } from "react";
import FormulaRow from "./FormulaRow";

const OverallTable = () => {
    const innerCellStyling = "w-16 inline-block"
    const [ratio, setRatio] = useState<number>(60);
    const totalFlourWeight = 1000;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target?.value);
        setRatio(value);
    }

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
                   <FormulaRow ingredient={"Water"} initialValue={600} totalFlourWeight={totalFlourWeight} /> 
                   <FormulaRow ingredient={"Salt"} initialValue={2} totalFlourWeight={totalFlourWeight} /> 
                   <FormulaRow ingredient={"Yeast"} initialValue={1} totalFlourWeight={totalFlourWeight} /> 
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