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
    totalDoughWeight: number,
    flours: Entities<Ingredient>,
    ingredients: Entities<Ingredient>,
}

