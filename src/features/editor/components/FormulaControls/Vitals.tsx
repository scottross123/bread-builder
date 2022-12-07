import { Cell, InfoTable } from "@/components";

type VitalsProps = {
    formulaId: string,
    selectTotalFlourWeight: number,
    selectHydration: (formulaId: string) => number,
    selectTotalPFF: (formulaId: string) => number,
}

const Vitals = () => {
    return (
        <InfoTable>
            <tr>
                <Cell heading>Total Flour Weight</Cell>
                <Cell>100</Cell>
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