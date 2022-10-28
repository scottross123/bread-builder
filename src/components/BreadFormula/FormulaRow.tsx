import { ChangeEvent, useState } from "react";
import { InputMode } from "./BreadFormula";
const innerCellStyling = "w-20 inline-block";

type InputProps = {
    value: number,
    totalFlourWeight: number,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void 
}

const RatioInput = (props: InputProps) => {
    const { value, totalFlourWeight, handleChange } = props;

    return (
        <>
            <td><input className={innerCellStyling} type="number" value={value} onChange={handleChange} />%</td>
            <td><input className={innerCellStyling} type="number" value={value * totalFlourWeight / 100} readOnly />g</td>
        </>
    );
}

const WeightInput = (props: InputProps) => {
    const { value, totalFlourWeight, handleChange } = props; 
    
    return (
        <>
            <td><input className={innerCellStyling} type="number" value={value / totalFlourWeight * 100} readOnly />%</td>
            <td><input className={innerCellStyling} type="number" value={value} onChange={handleChange} />g</td>
        </>
    );
}                

type FormulaRowProps = {
    name: string,
    initialValue: number,
    totalFlourWeight: number,
    inputMode: InputMode
}

const FormulaRow = (props: FormulaRowProps) => {
    const { name, initialValue, totalFlourWeight, inputMode } = props;
    const [value, setValue] = useState<number>(initialValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValue = parseInt(e.target?.value);
        setValue(currentValue);
    }

    return (
        <tr>
            <td>{name}</td>
            { 
                (inputMode === 'ratio') ? 
                    <RatioInput 
                        value={value}
                        totalFlourWeight={totalFlourWeight}
                        handleChange={handleChange}
                    />
                :
                    <WeightInput
                        value={value}
                        totalFlourWeight={totalFlourWeight}
                        handleChange={handleChange}
                    />
            }             
        </tr>
    );
}

export default FormulaRow; 
