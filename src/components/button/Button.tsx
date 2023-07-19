import { MouseEventHandler } from "react"
import { DefaultProps } from "../../types"
import { StyledButton } from "./Button.styles"
import { BUTTON_SIZE } from "./types/ButtonSize"

type Props = DefaultProps & {
    onClick: MouseEventHandler<HTMLButtonElement>
    size?: BUTTON_SIZE
    value?: string
    disabled?: Boolean
}

export const Button = ({
    className,
    children,
    onClick,
    value,
    size = BUTTON_SIZE.M,
    disabled = false }: Props) => {
    return (
        <StyledButton
            role="button"
            className={className}
            value={value}
            data-size={size}
            data-disabled={disabled}
            onClick={onClick}>
            {children}
        </StyledButton>
    )
}