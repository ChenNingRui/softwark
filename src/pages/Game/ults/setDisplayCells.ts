import { Cell, CELL_STATE } from "../../../types"
import { cloneDeep } from "lodash"

export const hideDeployState = (cells: Cell[]): Cell[] => {
    const cloneCells = cloneDeep(cells)

    return cloneCells.map((cell) => {
        if (cell.state === CELL_STATE.DEPLOYED)
            cell.state = CELL_STATE.NORMAL

        return cell
    })
}