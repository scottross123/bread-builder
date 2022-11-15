export type Table<T> = {
    byId: Record<string, T>,
    allIds: string[],
}

export type InputMode = "percent" | 'weight';
/*
export type ingredient = {
    id: string,
    name: string,
    ratio: number
}

export type formula = {
    unitquantity: number,
    unitweight: number,
    wastefactor: number,
    flours: entities<ingredient>,
    ingredients: entities<ingredient>,
} */

export type IngredientCategory = "flour" | "fluid" | "starter" | "inclusion" | "other";

export type FormulaIngredient = {
    id: string,
    ingredientId: string,
    formulaId: string,
    ratio: number,
}

type BaseFormula = {
    id: string,
    primaryFlourId: string, // should correspond to an ingredient with ingredientCategory: 'flour'
    formulaIngredientIds: string[],
}

export type OverallFormula = BaseFormula & {
    id: 'overall';
};

export type Preferment = BaseFormula & {
    preFermentedFlour: number,
};

export type Soaker = BaseFormula;

export type Scald = BaseFormula;

export type Ingredient = {
    id: string,
    name: string,
    ingredientCategory: IngredientCategory, 
    formulaIngredientIds: string[],
}

export type Recipe = {
    unitQuantity: number,
    unitWeight: number,
    wasteFactor: number,
    entities: {
        ingredients: Table<Ingredient>,
        formulaIngredients: Table<FormulaIngredient>,
        formulas: Table<OverallFormula | Preferment | Soaker | Scald>,
    }
}