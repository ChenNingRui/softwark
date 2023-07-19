import { cloneDeep } from "lodash";
import { Cell, CELL_STATE, getColIndex } from "../types";

const deployFromLeft = (startKey: string[], endKey: string[], cells: Cell[]) => {
    const col = getColIndex(startKey[0])
    for (let i = Number(startKey[1]) - Number(endKey[1]); i >= 0; i--) {
        const index = Number(String(col) + String(Number(startKey[1]) - i))
        cells[index].state = CELL_STATE.DEPLOYED
    }

    return cells
}

const deployFromRight = (startKey: string[], endKey: string[], cells: Cell[]) => {
    const col = getColIndex(startKey[0])
    for (let i = 0; i <= Number(endKey[1]) - Number(startKey[1]); i++) {
        const index = Number(String(col) + String(Number(startKey[1]) + i))
        cells[index].state = CELL_STATE.DEPLOYED
    }

    return cells
}

const deployFromUp = (startKey: string[], endKey: string[], cells: Cell[]) => {
    const startCol = getColIndex(startKey[0])
    const endCol = getColIndex(endKey[0])
    for (let i = startCol - endCol; i >= 0; i--) {
        const index = Number(String(startCol - i) + String(startKey[1]))
        cells[index].state = CELL_STATE.DEPLOYED
    }

    return cells
}

const deployFromDown = (startKey: string[], endKey: string[], cells: Cell[]) => {
    const startCol = getColIndex(startKey[0])
    const endCol = getColIndex(endKey[0])
    for (let i = 0; i <= endCol - startCol; i++) {
        const index = Number(String(startCol + i) + String(startKey[1]))
        cells[index].state = CELL_STATE.DEPLOYED
    }

    return cells
}

export const deployShip = (
    cells: Cell[],
    startPoint: string,
    endPoint: string
) => {
    if (!startPoint || !endPoint) return cells
    if (!cells.length) throw new Error("cell is empty")

    let cloneCells = cloneDeep(cells)

    const startKey = startPoint.split("")
    const endKey = endPoint.split("")


    if (startKey[0] === endKey[0]) {//same col
        if (startKey[1] < endKey[1])
            cloneCells = deployFromRight(startKey, endKey, cloneCells)
        else if (startKey[1] > endKey[1])
            cloneCells = deployFromLeft(startKey, endKey, cloneCells)
    }
    else if (startKey[1] === endKey[1]) {//same row
        if (startKey[0] < endKey[0])
            cloneCells = deployFromDown(startKey, endKey, cloneCells)
        else if (startKey[0] > endKey[0])
            cloneCells = deployFromUp(startKey, endKey, cloneCells)
    }

    return cloneCells
}