type InfoTableProps = {
    children: JSX.Element[],
}

const InfoTable = (props: InfoTableProps) => {
    const { children } = props;

    return (
        <div>
            <table>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
}

export default InfoTable;