import { StoreApi } from "zustand";
import { SHIP_TYPES } from "../../../types";
import { DeployStoreType } from "../store/DeployStoreType";
import { initCells } from "../../../ults/initCells";
import { initSelectedItems } from "../../../ults/initSelectedItems";

export const resetDeployPanel = (
    set: StoreApi<DeployStoreType>['setState'],) => {
    set({
        shipItems: Object.values(SHIP_TYPES),
        cells: initCells(),
        shipName: "",
        startPoint: "",
        endPoint: "",
        startPointItems: initSelectedItems(),
        endPointItems: [],
    })
}