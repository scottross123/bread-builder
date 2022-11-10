type Entities<T> = {
    byId: Record<string, T>,
    allIds: string[],
}

export type InputMode = "percent" | 'weight';

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
}

type IngredientCategory = "flour" | "fluid" | "starter" | "inclusion" | "other";

type FormulaIngredient = {
    ingredientId: string,
    formulaId: string,
    ratio: number,
}

type Preferment = {
    id: string,
    preFermentedFlour: number,
    ingredients: FormulaIngredient[], 
}

type Soaker = {
    id: string,
    ingredients: FormulaIngredient[],
}

export type newIngredient = {
    id: string,
    name: string,
    ingredientCategory: IngredientCategory, 
}

export type newFormula = {
    unitQuantity: number,
    unitWeight: number,
    wasteFactor: number,
    ingredients: Ingredient[],
    overallFormula: FormulaIngredient[]
    preferments: Preferment[]
}