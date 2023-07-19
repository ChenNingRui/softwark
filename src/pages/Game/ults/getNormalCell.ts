import { Cell, CELL_STATE } from "../../../types";

export const getNormalCell = (cells: Cell[]): Cell => {
    if (cells.length === 1) return cells[0]
    const index = Math.floor((Math.random() * cells.length))

    if (cells[index].state !== CELL_STATE.NORMAL)
        return getNormalCell(cells)

    return cells[index]
}