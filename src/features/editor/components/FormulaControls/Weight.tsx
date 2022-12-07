import { Cell, InfoTable } from "@/components"
import { formatNumber } from "@/utils";
import { ChangeEvent } from "react";
import { FormulaControlsProps } from "./FormulaControls";

type WeightProps = Pick<FormulaControlsProps, "changeUnitQuantity" | "changeUnitWeight" | "unitQuantity" | "unitWeight">


const Weight = (props: WeightProps) => {
    const {
        unitWeight,
        unitQuantity,
        changeUnitQuantity,
        changeUnitWeight,
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
        <InfoTable>
            <tr>
                <Cell heading>Unit Weight</Cell>
                <Cell unit="grams">
                <input 
                    id="unit-weight" 
                    type="number"
                    min={0} 
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
            <tr>
                <Cell heading>Total Batch Weight</Cell>
                <Cell unit="grams">
                    <input
                        value={formatNumber(unitQuantity * unitWeight)}
                        disabled
                    />
                </Cell>
            </tr>
        </InfoTable>
    );
}

export default Weight;