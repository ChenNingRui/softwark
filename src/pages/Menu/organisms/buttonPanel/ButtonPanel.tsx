import { MouseEventHandler } from "react"
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from "../../../../components"
import { useToggle } from "../../../../useHooks"
import { StyledWrapper } from "./ButtonPanel.styles"

export const ButtonPanel = () => {
    const [active, onToggle] = useToggle(false)

    const navigate = useNavigate();

    const renderModal =
        <Modal title="Rule" onClose={onToggle}>
            <a href="https://en.wikipedia.org/wiki/Battleship_(game)" target="_black">wikipedia</a>
        </Modal>

    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        switch (e.currentTarget.value) {
            case "start":
                navigate('/deploy')
                break;
            case "rule":
                onToggle()
                break;
            default:
        }
    }

    return (
        <StyledWrapper>
            <Button value="start" onClick={onClick}>Start</Button>
            <Button value="rule" onClick={onClick}>Rule</Button>
            {active && renderModal}
        </StyledWrapper>
    )
}