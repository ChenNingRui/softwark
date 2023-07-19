import { DefaultProps } from "../../types"
import { MouseEvent } from "react"
import { Button } from "../button"
import { Divider } from "../divider"
import { Header } from "../header"
import { StyledChildWrapper, StyledHeaderWrapper, StyledPanel, StyledWrapper } from "./Modal.styles"

type Props = DefaultProps & {
    title: string
    onClose: () => void
    buttonLabel?: string
}

export const Modal = ({ title, onClose, buttonLabel = "Close", children }: Props) => {
    return (
        <StyledWrapper role="modal" onClick={onClose}>
            <StyledPanel onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <StyledHeaderWrapper>
                    <Header title={title} />
                    <Divider />
                </StyledHeaderWrapper>
                <StyledChildWrapper role="child">
                    {children}
                </StyledChildWrapper>
                <Button onClick={onClose}>{buttonLabel}</Button>
            </StyledPanel>
        </StyledWrapper>
    )
}