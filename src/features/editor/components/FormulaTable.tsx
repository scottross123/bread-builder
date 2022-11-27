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
    const innerCellStyling = "w-16 inline-block";

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
        <table className="border-collapse border">
            <thead>
                <tr>
                    <th colSpan={3}>Overall Formula</th>
                </tr>
                <tr>
                    <th>Ingredients</th>
                    <th>%</th>
                    <th>grams</th>
                </tr>
            </thead>
            <tbody>
                {
                    formulaIngredientsList.map((ingredient) => {
                        return (
                            <FormulaRow
                                key={ingredient.formulaIngredientId}
                                ingredient={ingredient}
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
                    <th>Totals</th>
                    <th><p className={innerCellStyling}>{formatNumber(selectTotalRatio(formula.id) * 100)}</p>%</th>
                    <th>{formatNumber(selectTotalDoughWeight)}g</th>
                </tr>
            </tfoot>
        </table>
    );
}

export default FormulaTable;