import { Cell, CELL_STATE, colIndexs, rowIndexs } from "../types"

export const initCells = () => {
    const result: Cell[] = []

    colIndexs.forEach((col) => rowIndexs.forEach((row) =>
        result.push({
            key: col + row,
            state: CELL_STATE.NORMAL
        })
    ))

    return result
}

