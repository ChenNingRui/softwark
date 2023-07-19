import { StoreApi } from "zustand";
import { Cell, CELL_STATE, colIndexs, getColIndex, rowIndexs } from "../../../types"
import { GameStoreType } from "../store/GameStoreType";
import { resetWeights, weights } from "../types";
import { attackShip } from "./attackShip";

const getRandomCell = (cells: Cell[]): Cell => {
    const index = Math.floor(Math.random() * cells.length);

    if (cells[index].state === CELL_STATE.HIT
        || cells[index].state === CELL_STATE.MISS) {
        return getRandomCell(cells)
    }

    return cells[index]
}

const findUpByTarget = (
    target: Cell,
    cells: Cell[]): Cell | undefined => {
    const indexs = target.key.split("")
    const col = getColIndex(indexs[0])
    const newCol = col - weights.up
    if (!colIndexs[newCol]) {
        weights.up = -1
        return findCellByTarget(target, cells)
    }
    else {
        const index = Number(String(newCol) + String(indexs[1]))
        const cell = cells[index]
        if (cell.state === CELL_STATE.MISS
            || cell.state === CELL_STATE.HIT) {
            weights.up = -1
            return findCellByTarget(target, cells)
        }
        if (cell.state === CELL_STATE.DEPLOYED) {
            weights.up += 1
        }
        return cell
    }
}

const findDownByTarget = (
    target: Cell,
    cells: Cell[]): Cell | undefined => {
    const indexs = target.key.split("")
    const col = getColIndex(indexs[0])
    const newCol = col + weights.down
    if (!colIndexs[newCol]) {
        weights.down = -1
        return findCellByTarget(target, cells)
    }
    else {
        const index = Number(String(newCol) + String(indexs[1]))
        const cell = cells[index]
        if (cell.state === CELL_STATE.MISS
            || cell.state === CELL_STATE.HIT) {
            weights.down = -1
            return findCellByTarget(target, cells)
        }
        if (cell.state === CELL_STATE.DEPLOYED) {
            weights.down += 1
        }
        return cell
    }
}

const findLeftByTarget = (
    target: Cell,
    cells: Cell[]): Cell | undefined => {
    const indexs = target.key.split("")
    const newRow = rowIndexs[Number(indexs[1]) - Number(weights.left)]
    if (!newRow) {
        weights.left = -1
        return findCellByTarget(target, cells)
    }
    else {
        const colIndex = getColIndex(indexs[0])
        const index = Number(String(colIndex) + String(newRow))
        const cell = cells[index]
        if (cell.state === CELL_STATE.MISS
            || cell.state === CELL_STATE.HIT) {
            weights.left = -1
            return findCellByTarget(target, cells)
        }

        if (cell.state === CELL_STATE.DEPLOYED) {
            weights.left += 1
        }
        return cell
    }
}

const findRightByTarget = (
    target: Cell,
    cells: Cell[]): Cell | undefined => {
    const indexs = target.key.split("")
    const newRow = rowIndexs[Number(indexs[1]) + Number(weights.right)]
    if (!newRow) {
        weights.right = -1
        return findCellByTarget(target, cells)
    }
    else {
        const colIndex = getColIndex(indexs[0])
        const index = Number(String(colIndex) + newRow)
        const cell = cells[index]
        if (cell.state === CELL_STATE.MISS
            || cell.state === CELL_STATE.HIT) {
            weights.right = -1
            return findCellByTarget(target, cells)
        }
        if (cell.state === CELL_STATE.DEPLOYED) {
            weights.right += 1
        }
        return cell
    }
}

const findCellByTarget = (
    target: Cell,
    cells: Cell[]): Cell | undefined => {
    if (weights.up > 0) {
        return findUpByTarget(target, cells)
    }
    if (weights.down > 0) {
        return findDownByTarget(target, cells)
    }
    if (weights.left > 0) {
        return findLeftByTarget(target, cells)
    }
    if (weights.right > 0) {
        return findRightByTarget(target, cells)
    }
}

export const aiActivity = (
    get: StoreApi<GameStoreType>['getState']) => {
    const { playerCells, lastTarget, setLastTarget } = get()

    let cell

    if (lastTarget) {
        cell = findCellByTarget(lastTarget, playerCells)
        if (!cell) cell = getRandomCell(playerCells)
    }
    else {
        cell = getRandomCell(playerCells)
        if (cell.state === CELL_STATE.NORMAL) {
            resetWeights()
            setLastTarget(null)
        }
        if (cell.state === CELL_STATE.DEPLOYED) {
            setLastTarget(cell)
        }
    }

    return attackShip(cell.key, playerCells)
}