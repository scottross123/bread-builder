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
import Cell from "./Cell";
import FormulaRow from "./FormulaRow";

export type FormulaTableProps =  {
    formula: Formula,
    formulaIngredients: Table<FormulaIngredient>,
    ingredients: Table<Ingredient>,
    inputMode: InputMode,
    isDoughWeightLocked: boolean,
    totalWeight: number,
} & Pick<BreadFormulaProps, "changePercent" | "changeWeight" | "selectFormulaTotalFlourWeight" | "selectFormulaTotalRatio">;

const FormulaTable = (props: FormulaTableProps) => {
    const { 
        formula,
        formulaIngredients,
        ingredients,
        inputMode, 
        isDoughWeightLocked,
        changePercent,
        changeWeight,
        selectFormulaTotalFlourWeight,
        selectFormulaTotalRatio,
        totalWeight,
    } = props;
    const innerCellStyling = "w-20 inline-block";

    const ingredientsList = tableToList(ingredients);

    return (
        <table className="border-collapse border text-left">
            <thead>
                {
                    (formula as Preferment).preFermentedFlour ? (
                        <tr>
                            <Cell heading>PPF</Cell>
                            <Cell unit="%">
                                <input 
                                    className={innerCellStyling}
                                    type="number"
                                    value={formatNumber((formula as Preferment).preFermentedFlour * 100)}
                                    readOnly
                                />
                            </Cell>
                        </tr>
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

                        console.log("bruh", isIngredientInFormula);
                        
                        if (!formulaIngredientId || !isIngredientInFormula) {
                            return (
                                <tr key={"undefined" + ingredient.id}>
                                    <Cell>&nbsp;</Cell>
                                    <Cell>&nbsp;</Cell>
                                </tr>
                            );
                        }

                        const formulaIngredient = formulaIngredients.byId[formulaIngredientId];
                        console.log("form ingred", formulaIngredient)


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
                                isDoughWeightLocked={isDoughWeightLocked}
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