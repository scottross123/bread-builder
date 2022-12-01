import { 
    FormulaIngredient, 
    Ingredient, 
    InputMode, 
    OverallFormula, 
    Preferment, 
    Scald, 
    Soaker, 
    Table 
} from "@/types/recipe";
import { formatNumber } from "@/utils";
import Cell from "./Cell";
import FormulaRow from "./FormulaRow";

type FormulaTableProps = {
    formula: OverallFormula | Preferment | Soaker | Scald,
    formulaIngredients: Table<FormulaIngredient>,
    ingredients: Table<Ingredient>,
    inputMode: InputMode,
    isDoughWeightLocked: boolean,
    changePercent: (id: string, percent: number, totalFlourWeight?: number) => void,
    changeWeight: (id: string, weight: number, totalFlourWeight: number) => void,
    selectTotalFlourWeight: number,
    selectTotalRatio: (formulaId: string) => number,    
    selectTotalDoughWeight: number,
}

const FormulaTable = (props: FormulaTableProps) => {
    const { 
        formula,
        formulaIngredients,
        ingredients,
        inputMode, 
        isDoughWeightLocked,
        changePercent,
        changeWeight,
        selectTotalFlourWeight,
        selectTotalRatio,
        selectTotalDoughWeight
    } = props;
    const innerCellStyling = "w-20 inline-block";

    const formulaIngredientsList = formula.formulaIngredientIds.map((formulaIngredientId: string) => {
        const formulaIngredient = formulaIngredients.byId[formulaIngredientId];
        const { name, ingredientCategory } = ingredients.byId[formulaIngredient.ingredientId];
        return {
            formulaIngredientId: formulaIngredientId,
            name: name,
            ratio: formulaIngredient.ratio,
            isFlour: ingredientCategory === "flour",
        }
    });

    return (
        <table className="border-collapse border text-left">
            <thead>
                <tr>
                    <Cell heading colSpan={3}>Overall Formula</Cell>
                </tr>
                <tr>
                    <Cell heading>Ingredients</Cell>
                    <Cell heading>Baker&apos;s %</Cell>
                    <Cell heading>grams</Cell>
                </tr>
            </thead>
            <tbody>
                {
                    formulaIngredientsList.map((ingredient) => {
                        if (ingredient.formulaIngredientId === formula.primaryFlourId) {
                            return (
                                <tr key={ingredient.formulaIngredientId}>
                                    <Cell>{ingredient.name}</Cell>
                                    <Cell unit="%">
                                        <input 
                                            className={innerCellStyling}
                                            type="number"
                                            value={formatNumber(ingredient.ratio * 100)}
                                            readOnly
                                        />
                                    </Cell>
                                    <Cell unit="g"><input
                                        className={innerCellStyling}
                                        type="number"
                                        value={formatNumber(ingredient.ratio * selectTotalFlourWeight)}
                                        readOnly 
                                        />
                                    </Cell>
                                </tr>
                            ) 
                        }
                        return (
                            <FormulaRow
                                key={ingredient.formulaIngredientId}
                                ingredient={ingredient}
                                primaryFlourId={ingredient.isFlour ? formula.primaryFlourId : undefined}
                                selectTotalFlourWeight={selectTotalFlourWeight} 
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
                    <Cell heading>Totals</Cell>
                    <Cell heading unit="%"><p className={innerCellStyling}>{formatNumber(selectTotalRatio(formula.id) * 100)}</p></Cell>
                    <Cell heading unit="g">{formatNumber(selectTotalDoughWeight).toString()}</Cell>
                </tr>
            </tfoot>
        </table>
    );
}

export default FormulaTable;