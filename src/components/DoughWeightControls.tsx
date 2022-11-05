import { ChangeEvent } from "react";
import { formatNumber } from "../utils";

type DoughWeightControlsProps = {
    totalDoughWeight: number,
    changeTotalDoughWeight: (newTotalDoughWeight: number) => void,
}

const DoughWeightControls = (props: DoughWeightControlsProps) => {
    const { totalDoughWeight, changeTotalDoughWeight } = props;
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => changeTotalDoughWeight(parseFloat(event.target.value));

    return (
        <label htmlFor="dough-weight">
            Total Dough Weight
            <input id="dough-weight" type="number" value={formatNumber(totalDoughWeight)} onChange={handleChange}/>
        </label>
 
    );
}

export default DoughWeightControls;