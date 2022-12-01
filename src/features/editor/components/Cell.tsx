type CellProps = {
    children: JSX.Element | string,
    unit?: string,
    heading?: boolean,
    colSpan?: number,
}

const Cell = (props: CellProps) => {
    const { 
        children, 
        unit, 
        heading, 
        colSpan 
    } = props;

    const style = "border-2 p-1";

    if (heading) {
        return (
            <th className={style} colSpan={colSpan}>
                { children } { unit }
            </th> 
        )
    }

    return (
        <td className={style} colSpan={colSpan}> 
            { children } { unit }
        </td>
    );
}

export default Cell;