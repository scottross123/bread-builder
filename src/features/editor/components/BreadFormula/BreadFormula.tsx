import { useState } from "react";
import { Recipe, InputMode, Formula, WhichWeightConstant } from "@/types";
import FormulaTable from "./FormulaTable";
import Ingredients from "./Ingredients";
import { tableToList } from "@/utils";
import FinalDoughTable from "./FinalDoughTable";

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
    inputMode: InputMode,
    whichWeightConstant: WhichWeightConstant,
}

const BreadFormula = (props: BreadFormulaProps) => {
    const { 
        recipe: { 
            entities: {
                ingredients,
                formulaIngredients,
                formulas,
            }    
        }, 
        changePercent,
        changeWeight,
        selectTotalDoughWeight,
        selectPreFermentWeight,
        selectFormulaTotalFlourWeight,
        selectFormulaTotalRatio,
        inputMode,
        whichWeightConstant,
    } = props;

    const formulasList = tableToList(formulas);

    return (
        <div data-testid="bread-formula" className="">
            <table className="border-collapse m-auto">
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
                                        whichWeightConstant={whichWeightConstant}
                                        totalWeight={formula.id === "overall" ? selectTotalDoughWeight : selectPreFermentWeight(formula.id)}
                                        changePercent={changePercent}
                                        changeWeight={changeWeight}
                                        selectFormulaTotalFlourWeight={selectFormulaTotalFlourWeight}
                                        selectFormulaTotalRatio={selectFormulaTotalRatio}
                                    />
                                </td>
                            )
                        }

                        {
                            formulasList.length > 1 && <FinalDoughTable />
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
                whichWeightConstant={whichWeightConstant} 
                setWhichWeightConstant={setWhichWeightConstant}
                inputMode={inputMode}
                setInputMode={setInputMode}
            />
            <InputModeSelection 
                inputMode={inputMode} 
                setInputMode={setInputMode} 
                whichWeightConstant={whichWeightConstant}
            /> */}
        </div>
    );
};

export default BreadFormula;
