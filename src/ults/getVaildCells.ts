import { Cell, CELL_STATE, getColIndex, Ships } from "../types"

const getShip = (shipName: string) => {
    return Ships.find((ship) => ship.name === shipName)
}

const checkUpCol = (
    cells: Cell[],
    shipName: string,
    startPoint: string,
    results: Cell[]) => {
    const ship = getShip(shipName)
    if (!ship) return

    const startChar = startPoint.split("")
    if (!startChar) return
    const startIndex = getColIndex(startChar[0])

    const result: Cell[] = []
    for (let i = startIndex - ship.size + 1; i < startIndex; i++) {
        const index = Number(String(i) + startChar[1])
        if (cells[index] && cells[index].state === CELL_STATE.NORMAL)
            result.push(cells[index])
        else return null
    }

    if (result.length === ship.size - 1) results.push(result[0])
}

const checkDownCol = (
    cells: Cell[],
    shipName: string,
    startPoint: string,
    results: Cell[]) => {
    const ship = getShip(shipName)
    if (!ship) return

    const startChar = startPoint.split("")
    if (!startChar) return
    const startIndex = getColIndex(startChar[0])

    const result: Cell[] = []
    for (let i = startIndex + ship.size - 1; i > startIndex; i--) {
        const index = Number(String(i) + startChar[1])
        if (cells[index] && cells[index].state === CELL_STATE.NORMAL)
            result.push(cells[index])
        else return null
    }

    if (result.length === ship.size - 1) results.push(result[0])
}

const checkRightRow = (
    cells: Cell[],
    shipName: string,
    startPoint: string,
    results: Cell[]) => {
    const ship = getShip(shipName)
    if (!ship) return

    const startChar = startPoint.split("")
    if (!startChar) return
    const startColIndex = getColIndex(startChar[0])

    const result: Cell[] = []
    const startRowIndex = Number(startChar[1])
    for (let i = startRowIndex + ship.size - 1; i > startRowIndex; i--) {
        const index = Number(String(startColIndex) + i)
        if (cells[index] && cells[index].state === CELL_STATE.NORMAL)
            result.push(cells[index])
        else return null
    }

    if (result.length === ship.size - 1) results.push(result[0])
}

const checkLeftRow = (
    cells: Cell[],
    shipName: string,
    startPoint: string,
    results: Cell[]) => {
    const ship = getShip(shipName)
    if (!ship) return

    const startChar = startPoint.split("")
    if (!startChar) return
    const startColIndex = getColIndex(startChar[0])

    const result: Cell[] = []
    const startRowIndex = Number(startChar[1])
    for (let i = startRowIndex - ship.size + 1; i < startRowIndex; i++) {
        const index = Number(String(startColIndex) + i)
        if (cells[index] && cells[index].state === CELL_STATE.NORMAL)
            result.push(cells[index])
        else return null
    }

    if (result.length === ship.size - 1) results.push(result[0])
}

export const getVaildCells = (
    cells: Cell[],
    shipName: string,
    startPoint: string
) => {
    if (!cells.length) throw new Error("Cells are empty")

    const results: Cell[] = []

    checkUpCol(cells, shipName, startPoint, results)
    checkDownCol(cells, shipName, startPoint, results)
    checkRightRow(cells, shipName, startPoint, results)
    checkLeftRow(cells, shipName, startPoint, results)

    return results
}
