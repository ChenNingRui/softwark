import { Cell, CELL_STATE } from "../../../types"

export const filterAvailableCell = (cells: Cell[]) => {
    const result: string[] = []

    cells.forEach((cell) => {
        if (cell.state === CELL_STATE.NORMAL)
            result.push(cell.key)
    })

    return result
}
