import { Cell } from "../../../types"

export type DeployStoreType = {
    cells: Cell[]
    setCells: (value: Cell[]) => void
    shipName: string
    setShipName: (value: string) => void
    startPoint: string
    setStartPoint: (value: string) => void
    endPoint: string
    setEndPoint: (value: string) => void
    shipItems: string[]
    setShipItems: (value: string[]) => void
    startPointItems: string[]
    setStartPointItems: (value: string[]) => void
    endPointItems: string[] | undefined
    setEndPointItems: (value: string[]) => void

    setDeployPanel: () => void
    resetDeployPanel: () => void
}