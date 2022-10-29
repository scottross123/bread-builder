import { ChangeEvent, useState } from "react";
import InputModeSelection from "./InputModeSelection";
import OverallTable from "./OverallTable";

export type InputMode = "percent" | 'weight';

const BreadFormula = () => {
    const [inputMode, setInputMode] = useState<InputMode>("percent");

    return (
        <div className="">
            <OverallTable inputMode={inputMode} />
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode}/>
        </div>
    );
};

export default BreadFormula;
