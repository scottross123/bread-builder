type LockDoughWeightProps = {
    isDoughWeightLocked: boolean,
}

const LockDoughWeight = (props: LockDoughWeightProps) => {
    const { isDoughWeightLocked } = props;

    return (
        <label htmlFor="lock-dough-weight">
            Lock Dough Weight
            <input id="lock-dough-weight" type="checkbox" />
        </label>
    )
}

export default LockDoughWeight;