import { Dispatch, SetStateAction } from "react";

type LockDoughWeightProps = {
    isDoughWeightLocked: boolean,
    setIsDoughWeightLocked: Dispatch<SetStateAction<boolean>>,
}

const LockDoughWeight = (props: LockDoughWeightProps) => {
    const { isDoughWeightLocked, setIsDoughWeightLocked } = props;

    const handleChange = () => setIsDoughWeightLocked(!isDoughWeightLocked);

    return (
        <label htmlFor="lock-dough-weight">
            Lock Dough Weight
            <input 
                id="lock-dough-weight" 
                type="checkbox" 
                checked={isDoughWeightLocked} 
                onChange={handleChange} 
            />
        </label>
    )
}

export default LockDoughWeight;