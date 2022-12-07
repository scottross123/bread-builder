import { Cell } from "@/components";
import { formatNumber } from "@/utils";
import { ChangeEvent } from "react";
import { FormulaTableProps } from "./FormulaTable";

type PffRowProps = {
    formulaId: string,
    pffPercent: number,
} & Pick<FormulaTableProps, "changePff">;

const PffRow = (props: PffRowProps) => {
    const { formulaId, pffPercent, changePff } = props;
    
    const innerCellStyling = "w-20 inline-block";

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        console.log("pff", value)
        console.log("fomulaId");
        changePff(formulaId, value / 100);
    }

    return (
        <tr>
            <Cell heading>PPF</Cell>
            <Cell unit="%">
                <input 
                    className={innerCellStyling}
                    type="number"
                    value={formatNumber(pffPercent)}
                    onChange={handleChange}
                />
            </Cell>
        </tr>
    );
}

export default PffRow;