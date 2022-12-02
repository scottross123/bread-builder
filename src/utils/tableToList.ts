import { Table } from "@/types/Recipe";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tableToList = (table: Table<any>) => {
    return table.allIds.map((id) => table.byId[id]);
}