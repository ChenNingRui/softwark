import { create, StoreApi } from "zustand";
import { Cell } from "../../../types";
import { aiActivity } from "../ults/aiActivity";
import { GameStoreType } from "./GameStoreType";

export const useGameStore = create<GameStoreType>((
    set: StoreApi<GameStoreType>['setState'],
    get: StoreApi<GameStoreType>['getState']) => ({
        resultText: "",
        setResultText: (value: string) => set({ resultText: value }),
        aiCells: [],
        setAICells: (value: Cell[]) => set({ aiCells: value }),
        displayCells: [],
        setDisplayCells: (value: Cell[]) => set({ displayCells: value }),
        playerCells: [],
        setPlayerCells: (value: Cell[]) => set({ playerCells: value }),
        playerDisplayCells: [],
        cellSelected: "",
        setCellSelected: (value: string) => set({ cellSelected: value }),
        playerScore: 0,
        setPlayerScore: (value: number) => set({ playerScore: value }),
        aiScore: 0,
        setAIScore: (value: number) => set({ aiScore: value }),
        cellItems: [],
        setCellItems: (value: string[]) => set({ cellItems: value }),
        lastTarget: null,
        setLastTarget: (value: Cell | null) => set({ lastTarget: value }),
        aiActivity: () => aiActivity(get)
    }))