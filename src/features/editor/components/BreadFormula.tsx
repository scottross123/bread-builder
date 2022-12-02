import { useState } from "react";
import { Recipe, InputMode, Formula } from "@/types";
import DoughWeightControls from "./DoughWeightControls";
import InputModeSelection from "./InputModeSelection";
import LockDoughWeight from "./LockDoughWeight";
import FormulaTable from "./FormulaTable";
import Ingredients from "./Ingredients";
import { tableToList } from "@/utils";
import Cell from "./Cell";

export type BreadFormulaProps = {
    recipe: Recipe,
    changePercent: (id: string, percent: number, totalFlourWeight?: number) => void,
    changeWeight: (id: string, weight: number, totalFlourWeight: number) => void,
    changeUnitWeight: (newUnitWeight: number) => void,
    changeUnitQuantity: (newUnitQuantity: number) => void,
    changeWasteFactor: (newWasteFactor: number) => void,
    selectTotalDoughWeight: number,
    selectFormulaTotalFlourWeight: (formulaId: string) => number,
    selectFormulaTotalRatio: (formulaId: string) => number,
    selectPreFermentWeight: (formulaId: string) => number,
}

const BreadFormula = (props: BreadFormulaProps) => {
    const { 
        recipe: { 
            unitQuantity,
            unitWeight,
            wasteFactor,
            entities: {
                ingredients,
                formulaIngredients,
                formulas,
            }    
        }, 
        changePercent,
        changeWeight,
        changeUnitWeight,
        changeUnitQuantity,
        changeWasteFactor,
        selectTotalDoughWeight,
        selectPreFermentWeight,
        selectFormulaTotalFlourWeight,
        selectFormulaTotalRatio,
    } = props;
    const [inputMode, setInputMode] = useState<InputMode>("percent");
    const [isDoughWeightLocked, setIsDoughWeightLocked] = useState(true);

    const formulasList = tableToList(formulas);

    return (
        <div data-testid="bread-formula" className="">
            <table className="border-collapse border m-auto">
                <tbody>
                    <tr>
                        <td>
                            <Ingredients
                                ingredients={ingredients}
                            />
                        </td>
                        {
                            formulasList.map((formula: Formula) =>
                                <td key={formula.id}>
                                    <FormulaTable
                                        formula={formula}
                                        formulaIngredients={formulaIngredients}
                                        ingredients={ingredients}
                                        inputMode={inputMode} 
                                        isDoughWeightLocked={isDoughWeightLocked}
                                        totalWeight={formula.id === "overall" ? selectTotalDoughWeight : selectPreFermentWeight(formula.id)}
                                        changePercent={changePercent}
                                        changeWeight={changeWeight}
                                        selectFormulaTotalFlourWeight={selectFormulaTotalFlourWeight}
                                        selectFormulaTotalRatio={selectFormulaTotalRatio}
                                    />
                                </td>
                            )
                        }
                    </tr>
                </tbody>
            </table>
{/*             
            <DoughWeightControls 
                unitWeight={unitWeight}
                unitQuantity={unitQuantity}
                wasteFactor={wasteFactor}
                changeUnitWeight={changeUnitWeight}
                changeUnitQuantity={changeUnitQuantity}
                changeWasteFactor={changeWasteFactor}
            />
            <LockDoughWeight 
                isDoughWeightLocked={isDoughWeightLocked} 
                setIsDoughWeightLocked={setIsDoughWeightLocked}
                inputMode={inputMode}
                setInputMode={setInputMode}
            />
            <InputModeSelection 
                inputMode={inputMode} 
                setInputMode={setInputMode} 
                isDoughWeightLocked={isDoughWeightLocked}
            /> */}
        </div>
    );
};

export default BreadFormula;
