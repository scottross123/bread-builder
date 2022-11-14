/* type Entities<T> = {
    byId: Record<string, T>,
    allIds: string[],
} */

type Table<T> = {
    byId: Record<string, T>,
    allIds: string[],
}

export type InputMode = "percent" | 'weight';
/*
export type Ingredient = {
    id: string,
    name: string,
    ratio: number
}

export type Formula = {
    unitQuantity: number,
    unitWeight: number,
    wasteFactor: number,
    flours: Entities<Ingredient>,
    ingredients: Entities<Ingredient>,
} */

type IngredientCategory = "flour" | "fluid" | "starter" | "inclusion" | "other";

type FormulaIngredient = {
    id: string,
    ingredientId: string,
    formulaId: string,
    ratio: number,
}

type BaseFormula = {
    id: string,
    formulaIngredients: string[],
}

type OverallFormula = BaseFormula & {
    id: 'overall';
};

type Preferment = BaseFormula & {
    preFermentedFlour: number,
};

type Soaker = BaseFormula;

type Scald = BaseFormula;

export type Ingredient = {
    id: string,
    name: string,
    ingredientCategory: IngredientCategory, 
}

export type Recipe = {
    unitQuantity: number,
    unitWeight: number,
    wasteFactor: number,
    entities: {
        overallFormula: OverallFormula,
        ingredients: Table<Ingredient>,
        formulaIngredient: Table<FormulaIngredient>,
        preferments?: Table<Preferment>,
        soakers?: Table<Soaker>,
        scalds?: Table<Scald>,
    }
}