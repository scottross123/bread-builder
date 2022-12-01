import { ChangeEvent } from "react";
import { formatNumber } from "@/utils";

type DoughWeightControlsProps = {
    unitWeight: number,
    unitQuantity: number,
    wasteFactor: number,
    changeUnitWeight: (newUnitWeight: number) => void,
    changeUnitQuantity: (newUnitQuantity: number) => void,
    changeWasteFactor: (newWasteFactor: number) => void,
}

const DoughWeightControls = (props: DoughWeightControlsProps) => {
    const {
        unitWeight,
        unitQuantity,
        wasteFactor,
        changeUnitWeight,
        changeUnitQuantity,
        changeWasteFactor,
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
                case "waste-factor": {
                    return changeWasteFactor(value);
                }
            }
    }

    return (
        <div>
            <label htmlFor="unit-weight">
                Unit Weight
                <input 
                    id="unit-weight" 
                    type="number" 
                    value={formatNumber(unitWeight)} 
                    onChange={(event) => handleChange("unit-weight", event)}
                />
            </label>
            <label htmlFor="unit-qty">
                Unit Quantity
                <input 
                    id="unit-qty" 
                    type="number" 
                    value={formatNumber(unitQuantity)} 
                    onChange={(event) => handleChange("unit-qty", event)}
                />
            </label>
            {/* <label htmlFor="waste-factor">
                Waste Factor
                <input 
                    id="waste-factor" 
                    type="number" 
                    value={formatNumber(wasteFactor * 100)} 
                    onChange={(event) => handleChange("waste-factor", event)}
                />
            </label> */}
        </div>
    );
}

export default DoughWeightControls;