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

