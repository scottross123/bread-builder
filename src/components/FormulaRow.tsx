import { ChangeEvent, useState } from "react";
import { InputMode } from "../types";

const innerCellStyling = "w-20 inline-block";

type InputProps = {
    id: string,
    ratio: number,
    totalFlourWeight: number,
    changePercent: (id: string, percent: number) => void
}

const RatioInput = (props: InputProps) => {
    const { ratio, totalFlourWeight, changePercent, id } = props;
    const percent = ratio * 100;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => changePercent(id, parseInt(event.target.value))

    return (
        <>
            <td><input className={innerCellStyling} type="number" value={percent} onChange={handleChange} />%</td>
            <td><input className={innerCellStyling} type="number" value={percent * totalFlourWeight / 100} readOnly />g</td>
        </>
    );
}

const WeightInput = (props: InputProps) => {
    const { ratio, totalFlourWeight } = props;
    const weight = ratio * totalFlourWeight;
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setWeight(parseInt(event.target.value));

    return (
        <>
            <td><input className={innerCellStyling} type="number" value={weight / totalFlourWeight * 100} readOnly />%</td>
            <td><input className={innerCellStyling} type="number" value={weight} onChange={handleChange} />g</td>
        </>
    );
}                

export type FormulaRowProps = {
    id: string,
    name: string,
    ratio: number,
    totalFlourWeight: number,
    inputMode: InputMode,
    changePercent: () => void
}

const FormulaRow = (props: FormulaRowProps) => {
    const { name, ratio, totalFlourWeight, inputMode, id, changePercent } = props;

    return (
        <tr>
            <td>{name}</td>
            { 
                (inputMode === "percent") ? 
                    <RatioInput 
                        id={id}
                        ratio={ratio}
                        totalFlourWeight={totalFlourWeight}
                        changePercent={changePercent}
                    />
                :
                    <WeightInput
                        id={id}
                        ratio={ratio}
                        totalFlourWeight={totalFlourWeight}
                        changePercent={changePercent}
                    />
            }             
        </tr>
    );
}

export default FormulaRow; 
