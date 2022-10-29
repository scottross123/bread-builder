import { ChangeEvent, useState } from "react";
import { InputMode } from "./BreadFormula";
const innerCellStyling = "w-20 inline-block";

type InputProps = {
    ratio: number,
    totalFlourWeight: number,
}

const RatioInput = (props: InputProps) => {
    const { ratio, totalFlourWeight } = props;
    const [percent, setPercent] = useState<number>(ratio * 100);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setPercent(parseInt(e.target?.value));

    return (
        <>
            <td><input className={innerCellStyling} type="number" value={percent} onChange={handleChange} />%</td>
            <td><input className={innerCellStyling} type="number" value={percent * totalFlourWeight / 100} readOnly />g</td>
        </>
    );
}

const WeightInput = (props: InputProps) => {
    const { ratio, totalFlourWeight } = props;
    const [weight, setWeight] = useState<number>(ratio * totalFlourWeight);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setWeight(parseInt(e.target?.value));

    return (
        <>
            <td><input className={innerCellStyling} type="number" value={weight / totalFlourWeight * 100} readOnly />%</td>
            <td><input className={innerCellStyling} type="number" value={weight} onChange={handleChange} />g</td>
        </>
    );
}                

type FormulaRowProps = {
    name: string,
    ratio: number,
    totalFlourWeight: number,
    inputMode: InputMode
}

const FormulaRow = (props: FormulaRowProps) => {
    const { name, ratio, totalFlourWeight, inputMode } = props;

    return (
        <tr>
            <td>{name}</td>
            { 
                (inputMode === "percent") ? 
                    <RatioInput 
                        ratio={ratio}
                        totalFlourWeight={totalFlourWeight}
                    />
                :
                    <WeightInput
                        ratio={ratio}
                        totalFlourWeight={totalFlourWeight}
                    />
            }             
        </tr>
    );
}

export default FormulaRow; 
