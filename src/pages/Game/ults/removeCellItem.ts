import { cloneDeep } from "lodash"

export const removeCellItem = (cellKey: string, cellItems: string[]) => {
    const cloneitems = cloneDeep(cellItems)

    const index = cloneitems.indexOf(cellKey)
    if (index > -1) {
        cloneitems.splice(index, 1)
    }

    return cloneitems
}