import { ChangeEvent } from "react";

type LockDoughWeightProps = {
    isDoughWeightLocked: boolean,
}

const LockDoughWeight = (props: LockDoughWeightProps) => {
    const { isDoughWeightLocked } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => 0

    return (
        <label htmlFor="lock-dough-weight">
            Lock Dough Weight
            <input id="lock-dough-weight" type="checkbox" checked={isDoughWeightLocked} onChange={handleChange} />
        </label>
    )
}

export default LockDoughWeight;