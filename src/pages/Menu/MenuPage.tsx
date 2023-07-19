import { Button, BUTTON_SIZE, Divider, Header, Modal } from "../../components"
import { useToggle } from "../../useHooks"
import { StyledAboutWrapper, StyledWrapper } from "./MenuPage.styles"
import { ButtonPanel } from "./organisms"


export const MenuPage = () => {
    const [active, onToggle] = useToggle(false)

    const renderModal =
        <Modal title="Credits" onClose={onToggle}>
            <StyledAboutWrapper>
                Ningrui Chan
                channingrui@gmail.com
            </StyledAboutWrapper>
        </Modal>

    return (
        <StyledWrapper>
            <Header title="Menu">
                <Button value="credits" size={BUTTON_SIZE.S} onClick={onToggle}>Credits</Button>
            </Header>
            <Divider />
            <ButtonPanel />
            {active && renderModal}
        </StyledWrapper>
    )
}