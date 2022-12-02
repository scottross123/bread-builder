import { expect, it, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import BreadFormula from "../BreadFormula";
import { Ingredient } from "../../../../types/recipe";

describe("test BreadFormula renders properly", () => {
    
    const ingredients: Ingredient[] = [
        {
            id: "ing1",
            name: "Water",
            ratio: .6
        },
        {
            id: "ing2",
            name: "Salt",
            ratio: .02
        },
        {
            id: "ing3",
            name: "Yeast",
            ratio: .01
        },
    ]

    beforeEach(() => {
        render(<BreadFormula ingredients={ingredients} initialTotalDoughWeight={2000} />);
    })

    it("example test, test if BreadFormula renders", () => {
        expect(screen.getByTestId("bread-formula")).toBeTruthy();
    })

})