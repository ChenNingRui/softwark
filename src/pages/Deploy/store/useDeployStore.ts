import { create, StoreApi } from "zustand";
import { Cell } from "../../../types";
import { resetDeployPanel } from "../ults/resetDeployPanel";
import { confirmSelection } from "../ults/confirmSelection";
import { DeployStoreType } from "./DeployStoreType";

export const useDeloyStore = create<DeployStoreType>((
    set: StoreApi<DeployStoreType>['setState'],
    get: StoreApi<DeployStoreType>['getState']) => ({
        cells: [],
        setCells: (value: Cell[]) => set({ cells: value }),
        shipName: "",
        setShipName: (value: string) => set({ shipName: value }),
        startPoint: "",
        setStartPoint: (value: string) => set({ startPoint: value }),
        endPoint: "",
        setEndPoint: (value: string) => set({ endPoint: value }),
        shipItems: [],
        setShipItems: (value: string[]) => set({ shipItems: value }),
        startPointItems: [],
        setStartPointItems: (value: string[]) => set({ startPointItems: value }),
        endPointItems: [],
        setEndPointItems: (value: string[]) => set({ endPointItems: value }),

        setDeployPanel: () => confirmSelection(set, get),
        resetDeployPanel: () => resetDeployPanel(set)
    }))
