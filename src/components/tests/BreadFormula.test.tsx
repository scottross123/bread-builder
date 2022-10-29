import { expect, it, describe, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import BreadFormula from "../BreadFormula/BreadFormula";

describe("test BreadFormula renders properly", () => {
    
    beforeEach(() => {
        render(<BreadFormula />);
    })

    it("example test, test if BreadFormula renders", () => {
        expect(screen.getByTestId("bread-formula")).toBeTruthy();
    })

})