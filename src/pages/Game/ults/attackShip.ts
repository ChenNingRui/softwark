import { Cell, CELL_STATE } from "../../../types";
import { cloneDeep } from "lodash"

export const attackShip = (cellKey: string, cells: Cell[]) => {
    const cloneCells = cloneDeep(cells)
    let hasHit: Boolean = false

    const cell = cloneCells.find((cell) => cell.key === cellKey)
    if (cell) {
        if (cell.state === CELL_STATE.NORMAL) {
            cell.state = CELL_STATE.MISS
        }
        else if (cell.state === CELL_STATE.DEPLOYED) {
            cell.state = CELL_STATE.HIT
            hasHit = true
        }
        else
            throw new Error("cell has unknow state")
    }
    else {
        throw new Error("cannot find the cell")
    }

    return { cells: cloneCells, hasHit }
}