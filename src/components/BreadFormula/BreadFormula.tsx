import { ChangeEvent, useState } from "react";
import InputModeSelection from "./InputModeSelection";
import OverallTable from "./OverallTable";

export type InputMode = 'ratio' | 'weight';

const BreadFormula = () => {
    const [inputMode, setInputMode] = useState<InputMode>("ratio");

    return (
        <div className="">
            <OverallTable inputMode={inputMode} />
            <InputModeSelection inputMode={inputMode} setInputMode={setInputMode}/>
        </div>
    );
};

export default BreadFormula;
