import { ChangeEvent, useState } from "react";

const OverallTable = () => {
    const innerCellStyling = "w-16 inline-block"
    const [ratio, setRatio] = useState<number>(60);

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
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>White Flour</td>
                    <td><div className={innerCellStyling}>100.00</div>%</td>
                    <td>1000g</td>
                </tr>
                <tr>
                    <td>Water</td>
                    <td><input className={innerCellStyling} type="number" value={ratio + ".00"} onChange={handleChange} />%</td>
                    <td>{ratio * 10}g</td>
                </tr>
                <tr>
                    <td>Salt</td>
                    <td><input className={innerCellStyling} type="number" value="2.00" />%</td>
                    <td>20g</td>
                </tr>
                <tr>
                    <td>Yeast</td>
                    <td><input className={innerCellStyling} type="number" value="1.00" />%</td>
                    <td>10g</td>
                </tr>
            </tbody>
            <tfoot>
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