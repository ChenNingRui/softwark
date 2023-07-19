import { StoreApi } from "zustand";
import { cloneDeep } from "lodash";
import { DeployStoreType } from "../store/DeployStoreType";
import { CELL_STATE } from "../../../types";

export const confirmSelection = (
    set: StoreApi<DeployStoreType>['setState'],
    get: StoreApi<DeployStoreType>['getState']
) => {
    const { shipName, shipItems, cells } = get()
    const cloneShipItems = cloneDeep(shipItems)

    set({
        shipName: "",
        startPoint: "",
        endPoint: "",
        shipItems: cloneShipItems.filter((item) => item !== shipName),
        startPointItems: cells.filter((cell) =>
            cell.state === CELL_STATE.NORMAL).map((cell) => cell.key),
        endPointItems: [],
    })
}