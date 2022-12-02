type CellProps = {
    children: JSX.Element | string,
    unit?: string,
    heading?: boolean,
    colSpan?: number,
    rowSpan?: number,
}

const Cell = (props: CellProps) => {
    const { 
        children, 
        unit, 
        heading, 
        colSpan,
        rowSpan,
    } = props;

    const style = "border-2 p-1.5";

    if (heading) {
        return (
            <th className={style} colSpan={colSpan} rowSpan={rowSpan}>
                { children } { unit }
            </th> 
        )
    }

    return (
        <td className={style} colSpan={colSpan} rowSpan={rowSpan}> 
            { children } { unit }
        </td>
    );
}

export default Cell;