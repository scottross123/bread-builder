import { it, describe, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import FormulaRow, { FormulaRowProps } from "../BreadFormula/FormulaRow";

describe("test FormulaRow", () => {
    const setup = (props: FormulaRowProps) => {
        const formulaRow = render(<FormulaRow {...props}/>);
        const weight = props.ratio * props.totalFlourWeight;
        const ratio = props.ratio * 100;

        const weightInput = formulaRow.getByDisplayValue(weight) as HTMLInputElement;
        const ratioInput = formulaRow.getByDisplayValue(ratio) as HTMLInputElement;

        return {
            weightInput,
            ratioInput,
            ...formulaRow
        }
    }

    it("test changing weights updates percentage properly", () => {
        const props: FormulaRowProps = {
            name: "water",
            ratio: .6,
            totalFlourWeight: 1000,
            inputMode: "weight"
        };
        const { weightInput, ratioInput } = setup(props);
        fireEvent.change(weightInput, { target: { value: 750 }});
        expect(ratioInput.value).toBe("75");
    })

    it("test changing weights with more scarier numbers", () => {
        const props: FormulaRowProps = {
            name: "water",
            ratio: .5423,
            totalFlourWeight: 4532.89,
            inputMode: "weight"
        };
        const { weightInput, ratioInput } = setup(props);
        fireEvent.change(weightInput, { target: { value: 3000 } } );
        expect(ratioInput.value).toBe("66.18");
    })

    it("test chaning percentage updates weights properly", () => {
        const props: FormulaRowProps = {
            name: "sugar",
            ratio: .15,
            totalFlourWeight: 1200,
            inputMode: "percent",
        };
        const { weightInput, ratioInput } = setup(props);
        fireEvent.change(ratioInput, { target: { value: 20 } } );
        expect(weightInput.value).toBe("240");
    })
})
