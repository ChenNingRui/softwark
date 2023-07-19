import { colIndexs, rowIndexs } from "../types"

export const initSelectedItems = () => {
    const result: string[] = []
    colIndexs.forEach((col) => rowIndexs.forEach((row) =>
        result.push(col + row)
    ))

    return result
}

