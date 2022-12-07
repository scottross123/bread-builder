import { 
    Formula,
    FormulaIngredient, 
    Ingredient, 
    InputMode, 
    Preferment, 
    Table 
} from "@/types";
import { formatNumber, tableToList } from "@/utils";
import { BreadFormulaProps } from "./BreadFormula";
import { Cell } from "@/components";
import FormulaRow from "./FormulaRow";
import PffRow from "./pffRow";

export type FormulaTableProps =  {
    formula: Formula,
    formulaIngredients: Table<FormulaIngredient>,
    ingredients: Table<Ingredient>,
    totalWeight: number,
} & Pick<BreadFormulaProps, "changePercent" | "changeWeight" | "selectFormulaTotalFlourWeight" | "selectFormulaTotalRatio" | "inputMode" | "whichWeightConstant" | "changePff">;

const FormulaTable = (props: FormulaTableProps) => {
    const { 
        formula,
        formulaIngredients,
        ingredients,
        inputMode, 
        whichWeightConstant,
        changePercent,
        changeWeight,
        changePff,
        selectFormulaTotalFlourWeight,
        selectFormulaTotalRatio,
        totalWeight,
    } = props;
    const innerCellStyling = "w-20 inline-block";

    const ingredientsList = tableToList(ingredients);
    const preFermentedFlour: number | undefined = (formula as Preferment).preFermentedFlour;

    return (
        <table className="border-collapse border text-left">
            <thead>
                {
                    preFermentedFlour ? (
                        <PffRow
                            formulaId={formula.id}
                            pffPercent={preFermentedFlour * 100}
                            changePff={changePff}
                        />
                    ) : (
                        <tr>
                            <Cell colSpan={2}>&nbsp;</Cell>
                        </tr>
                    )
                }
                <tr>
                    <Cell heading colSpan={2}>{formula.name}</Cell>
                </tr>
                <tr>
                    <Cell heading>Baker&apos;s %</Cell>
                    <Cell heading>grams</Cell>
                </tr>
            </thead>
            <tbody>
                {
                    ingredientsList.map((ingredient: Ingredient) => {
                        const formulaIngredientId = formula.formulaIngredientIds
                            .find(id => 
                                formulaIngredients.byId[id].ingredientId === ingredient.id
                            );

                        
                        const isIngredientInFormula = ingredient.formulaIngredientIds
                            .some((formulaIngredientId: string) => 
                                formula.formulaIngredientIds.indexOf(formulaIngredientId) >= 0
                            );

                        // console.log("bruh", isIngredientInFormula);
                        
                        if (!formulaIngredientId || !isIngredientInFormula) {
                            return (
                                <tr key={"undefined" + ingredient.id}>
                                    <Cell>&nbsp;</Cell>
                                    <Cell>&nbsp;</Cell>
                                </tr>
                            );
                        }

                        const formulaIngredient = formulaIngredients.byId[formulaIngredientId];
                        // console.log("form ingred", formulaIngredient)


                        if (formulaIngredient.id === formula.primaryFlourId) {
                            return (
                                <tr key={formulaIngredient.id + ingredient.id}>
                                    <Cell unit="%">
                                        <input 
                                            className={innerCellStyling}
                                            type="number"
                                            value={formatNumber(formulaIngredient.ratio * 100)}
                                            readOnly
                                        />
                                    </Cell>
                                    <Cell unit="g"><input
                                        className={innerCellStyling}
                                        type="number"
                                        value={formatNumber(formulaIngredient.ratio * selectFormulaTotalFlourWeight(formula.id))}
                                        readOnly 
                                        />
                                    </Cell>
                                </tr>
                            ) 
                        }
                        return (
                            <FormulaRow
                                key={formulaIngredient.id + ingredient.id}
                                formulaIngredient={formulaIngredient}
                                primaryFlourId={formula.primaryFlourId}
                                isFlour={ingredient.ingredientCategory === "flour"}
                                totalFlourWeight={selectFormulaTotalFlourWeight(formula.id)} 
                                inputMode={inputMode}
                                whichWeightConstant={whichWeightConstant}
                                changePercent={changePercent}
                                changeWeight={changeWeight}
                            />
                        );
                    })
                }
            </tbody>
            <tfoot className="text-left">
                <tr>
                    <Cell heading unit="%"><p className={innerCellStyling}>{formatNumber(selectFormulaTotalRatio(formula.id) * 100)}</p></Cell>
                    <Cell heading unit="g">{formatNumber(totalWeight).toString()}</Cell>
                </tr>
            </tfoot>
        </table>
    );
}

export default FormulaTable;