import Cell from "./Cell";

type FinalDoughProps = {};

const FinalDoughTable = (props: FinalDoughProps) => {
    const {} = props;

    return (
        <table className="border-collapse border text-left">
            <thead>
                <tr>
                    <Cell>&nbsp;</Cell>
                </tr>
                <tr>
                    <Cell heading>Final Dough</Cell>
                </tr>
                <tr>
                    <Cell heading>grams</Cell>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default FinalDoughTable;