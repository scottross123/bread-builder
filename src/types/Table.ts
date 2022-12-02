export type Table<T> = {
    byId: Record<string, T>,
    allIds: string[],
}