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

const exampleFormula: Formula = {
    totalDoughWeight: 1630,
    flours: {
        byId: {
            "fl1": {
                id: "fl1",
                name: "white flour",
                ratio: 1,
            }
        },
        allIds: ["fl1"],
    },
    ingredients: {
        byId: {
            "ing1": {
                id: "ing1",
                name: "water",
                ratio: .6,
            },
            "ing2": {
                id: "ing2",
                name: "salt",
                ratio: .02,
            },
            "ing3": {
                id: "ing3",
                name: "yeast",
                ratio: .01
            }
        },
        allIds: ["ing1", "ing2", "ing3"],
    },
}
