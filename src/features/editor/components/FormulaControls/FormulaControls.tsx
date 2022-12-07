import { Cell } from "@/components";
import { formatNumber } from "@/utils";
import { ChangeEvent } from "react";

type FormulaControlsProps = {
    unitWeight: number,
    unitQuantity: number,
    changeUnitWeight: (newUnitWeight: number) => void,
    changeUnitQuantity: (newUnitQuantity: number) => void,
}

const FormulaControls = (props: FormulaControlsProps) => {
    const {
        unitWeight,
        unitQuantity,
        changeUnitWeight,
        changeUnitQuantity,
    } = props;

    const handleChange = (
        input: "unit-weight" | "unit-qty" | "waste-factor",
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const value = parseInt(event.target.value);

        switch (input) {
            case "unit-weight": {
                return changeUnitWeight(value);
            }
            case "unit-qty": {
                return changeUnitQuantity(value);
            }
        }
    }    


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
                            value={formatNumber(unitWeight)}
                            onChange={(event) => handleChange("unit-weight", event)}
                        />
                        </Cell>
                    </tr>
                    <tr>
                        <Cell heading>Unit Quantity</Cell>
                        <Cell unit="units">
                            <input 
                                id="unit-weight" 
                                type="number" 
                                value={formatNumber(unitQuantity)} 
                                onChange={(event) => handleChange("unit-qty", event)}
                            />
                        </Cell>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FormulaControls;

