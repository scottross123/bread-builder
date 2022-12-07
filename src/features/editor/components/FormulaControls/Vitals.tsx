import { Cell, InfoTable } from "@/components";
import { formatNumber } from "@/utils";

type VitalsProps = {
    formulaId: string,
    selectFormulaTotalFlourWeight: (formulaId: string) => number,
    selectHydration?: (formulaId: string) => number,
    selectTotalPFF?: (formulaId: string) => number,
}

const Vitals = (props: VitalsProps) => {
    const { selectFormulaTotalFlourWeight, formulaId } = props;
    const totalFlourWeight = selectFormulaTotalFlourWeight(formulaId)

    return (
        <InfoTable>
            <tr>
                <Cell heading>Total Flour Weight</Cell>
                <Cell>{formatNumber(totalFlourWeight).toString()}</Cell>
            </tr>
            <tr>
                <Cell heading>Total Hydration</Cell>
                <Cell>75</Cell>
            </tr>
            <tr>
                <Cell heading>Total PFF</Cell>
                <Cell>15</Cell>
            </tr>
        </InfoTable>
    );
}

export default Vitals;