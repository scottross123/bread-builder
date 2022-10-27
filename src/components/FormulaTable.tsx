const FormulaTable = () => {
    return (
        <table className="border-collapse border b">
            <thead>
                <tr>
                    <th colSpan={3}>Total Formula</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>White Flour</td>
                    <td>100%</td>
                    <td>1000g</td>
                </tr>
                <tr>
                    <td>Water</td>
                    <td>60%</td>
                    <td>600g</td>
                </tr>
                <tr>
                    <td>Salt</td>
                    <td>2%</td>
                    <td>20g</td>
                </tr>
                <tr>
                    <td>Yeast</td>
                    <td>1%</td>
                    <td>10g</td>
                </tr>
            </tbody>
        </table>
    );
};

export default FormulaTable;
