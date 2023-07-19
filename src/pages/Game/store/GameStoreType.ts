import { Cell } from "../../../types"

export type GameStoreType = {
    resultText: string,
    setResultText: (value: string) => void,
    aiCells: Cell[]
    setAICells: (value: Cell[]) => void,
    playerCells: Cell[]
    setPlayerCells: (value: Cell[]) => void,
    displayCells: Cell[],
    setDisplayCells: (value: Cell[]) => void,
    cellSelected: string
    setCellSelected: (value: string) => void,
    playerScore: number,
    setPlayerScore: (value: number) => void,
    aiScore: number,
    setAIScore: (value: number) => void,
    cellItems: string[],
    setCellItems: (value: string[]) => void,
    lastTarget: Cell | null,
    setLastTarget: (value: Cell | null) => void,
    aiActivity: () => {
        cells: Cell[];
        hasHit: Boolean;
    },
}