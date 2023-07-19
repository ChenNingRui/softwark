import { Cell, CELL_STATE, Ship, totalPoint } from "../../../types";
import { deployShip } from "../../../ults/deployShip";
import { getVaildCells } from "../../../ults/getVaildCells";
import { getNormalCell } from "./getNormalCell";
import { initCells } from "../../../ults/initCells";

const checkDeployState = (cells: Cell[]) => {
    let point = 0
    cells.forEach((cell) => {
        if (cell.state && cell.state === CELL_STATE.DEPLOYED)
            point++
    })

    if (point !== totalPoint) return false

    return true
}

const pickPoints = (ship: Ship, cells: Cell[]) => {
    const startPoint = getNormalCell(cells)
    if (!startPoint) pickPoints(ship, cells)
    const endPoints = getVaildCells(cells, ship.name, startPoint.key)
    if (endPoints.length === 0) pickPoints(ship, cells)
    const endPoint = getNormalCell(endPoints)
    return { startPoint, endPoint }
}

export const deployAIShips = (
    ships: Ship[],
): Cell[] => {
    let cloneCells = initCells()

    ships.forEach((ship) => {
        const { startPoint, endPoint } = pickPoints(ship, cloneCells)
        cloneCells = deployShip(cloneCells, startPoint.key, endPoint.key)
    })

    if (!checkDeployState(cloneCells)) {
        return deployAIShips(ships)
    }
    return cloneCells
}