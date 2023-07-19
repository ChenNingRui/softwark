import { Button, BUTTON_SIZE, Dropdown } from "../../../../components"
import { removeCellItem } from "../../ults/removeCellItem"
import { useGameStore } from "../../store/useGameStore"
import { attackShip } from "../../ults/attackShip"
import { StyledWrapper } from "./AttackPanel.styles"
import { hideDeployState } from "../../ults/setDisplayCells"

export const AttackPanel = () => {
    const {
        aiCells,
        cellSelected,
        cellItems,
        setAICells,
        setDisplayCells,
        setPlayerCells,
        setCellItems,
        setCellSelected,
        playerScore,
        aiScore,
        setPlayerScore,
        setAIScore,
        aiActivity } = useGameStore()

    const onClick = () => {
        if (!cellSelected) return

        const { cells, hasHit } = attackShip(cellSelected, aiCells)
        setDisplayCells(hideDeployState(cells))
        setAICells(cells)
        const items = removeCellItem(cellSelected, cellItems)
        setCellItems(items)
        setCellSelected("")

        if (hasHit)
            setPlayerScore(playerScore + 1)


        const { cells: playerCells, hasHit: aiHasHit } = aiActivity()
        setPlayerCells(playerCells)

        if (aiHasHit)
            setAIScore(aiScore + 1)
    }

    return (
        <StyledWrapper>
            <Dropdown selected={cellSelected}
                header="Select"
                menuItems={cellItems}
                onSelect={(value: string) => {
                    setCellSelected(value)
                }} />
            <Button size={BUTTON_SIZE.S} onClick={onClick}>Attack</Button>
        </StyledWrapper>
    )
}