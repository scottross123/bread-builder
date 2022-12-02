import { Cell } from "@/components";

const FormulaControls = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <Cell heading>Unit Weight</Cell>
                        <Cell unit="grams">
                        <input 
                            id="unit-weight" 
                            type="number" 
                        />
                        </Cell>
                    </tr>
                    <tr>
                        <Cell heading>Unit Quantity</Cell>
                        <Cell unit="units">
                            <input 
                                id="unit-weight" 
                                type="number" 
                            />
                        </Cell>
                    </tr>
                </tbody>
            </table>

            <table>
                <tbody>
                    <tr>
                        <Cell></Cell>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FormulaControls;