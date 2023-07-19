import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Button, BUTTON_SIZE, Divider, Grid, Header, Modal } from "../../components"
import { colIndexs, rowIndexs, Ships, totalPoint } from "../../types";
import { initCells } from "../../ults/initCells";
import { initSelectedItems } from "../../ults/initSelectedItems"
import { useToggle } from "../../useHooks"
import { useDeloyStore } from "../Deploy/store/useDeployStore"
import { StyledPlayground, StyledResultWrapper, StyledWrapper } from "./GamePage.styles"
import { AttackPanel } from "./organisms"
import { useGameStore } from "./store/useGameStore"
import { resetWeights } from "./types";
import { deployAIShips } from "./ults/deployAIShips"

export const GamePage = () => {
    const [active, onToggle, setToggle] = useToggle(false)
    const navigate = useNavigate()
    const { cells } = useDeloyStore()
    const {
        displayCells,
        playerCells,
        playerScore,
        aiScore,
        resultText,
        setResultText,
        setAICells,
        setDisplayCells,
        setPlayerCells,
        setCellItems,
        setPlayerScore,
        setAIScore,
        setLastTarget,
    } = useGameStore()

    useEffect(() => {
        if (playerScore >= totalPoint) {
            setResultText("You win!")
            setToggle(true)
        }

        if (aiScore >= totalPoint) {
            setResultText("You lose!")
            setToggle(true)
        }
    }, [aiScore, playerScore, setResultText, setToggle])

    useEffect(() => {
        setLastTarget(null)
        setPlayerScore(0)
        setAIScore(0)
        setPlayerCells(cells)
        setCellItems(initSelectedItems())
        const newCells = deployAIShips(Ships)
        console.log(newCells) // TODO -> for checking
        setAICells(newCells)
        setDisplayCells(initCells())
        resetWeights()
    }, [cells, setAICells, setAIScore, setCellItems, setDisplayCells, setLastTarget, setPlayerCells, setPlayerScore])

    const renderModal =
        <Modal title="Result" onClose={() => {
            onToggle()
            navigate("/")
        }}>
            <StyledResultWrapper>
                {resultText}
            </StyledResultWrapper>
        </Modal>

    return (
        <StyledWrapper>
            <Header title="Game">
                <Button value="back" size={BUTTON_SIZE.S} onClick={() => {
                    navigate("/")
                }}>Menu</Button>
            </Header>
            <Divider />
            <StyledPlayground>
                <Grid title={`Player: ${playerScore}`} cells={playerCells} cols={colIndexs} rows={rowIndexs} />
                <Grid title={`AI: ${aiScore}`} cells={displayCells} cols={colIndexs} rows={rowIndexs} />
            </StyledPlayground>
            <AttackPanel />
            {active && renderModal}
        </StyledWrapper>
    )
}