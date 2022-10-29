import { ChangeEvent, useState } from "react";
import InputModeSelection from "./InputModeSelection";
import OverallTable from "./OverallTable";

export type InputMode = "percent" | 'weight';

const BreadFormula = () => {
    const [inputMode, setInputMode] = useState<InputMode>("percent");
    const [totalDoughWeight, setTotalDoughWeight] = useState<number>(1630);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setTotalDoughWeight(parseInt(event.target.value));

    return (
        <div data-testid="bread-formula" className="">
            <OverallTable inputMode={inputMode} totalDoughWeight={totalDoughWeight} />
            <input type="number" value={totalDoughWeight} onChange={handleChange} />
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode} />
        </div>
    );
};

export default BreadFormula;
