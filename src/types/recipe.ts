import { Table } from "./";

export type IngredientCategory = "flour" | "fluid" | "starter" | "inclusion" | "other";

export type Ingredient = {
    id: string,
    name: string,
    ingredientCategory: IngredientCategory, 
    formulaIngredientIds: string[],
};

export type FormulaIngredient = {
    id: string,
    ingredientId: string,
    formulaId: string,
    ratio: number,
};

export type BaseFormula = {
    id: string,
    name: string,
    primaryFlourId: string, // should correspond to an ingredient with ingredientCategory: 'flour'
    formulaIngredientIds: string[],
};

export type OverallFormula = BaseFormula & {
    id: 'overall';
};

export type Preferment = BaseFormula & {
    preFermentedFlour: number,
};

export type Soaker = BaseFormula;

export type Scald = BaseFormula;

export type Formula = OverallFormula | Preferment | Scald | Soaker;



export type Recipe = {
    unitQuantity: number,
    unitWeight: number,
    wasteFactor: number,
    entities: {
        ingredients: Table<Ingredient>,
        formulaIngredients: Table<FormulaIngredient>,
        formulas: Table<OverallFormula | Preferment | Soaker | Scald>,
    }
};