import { DefaultProps } from "../../types"
import { StyledDivider } from "./Divider.styles"
import { DIVIDER_DIRECTION } from "./types"

export type DivierProps = DefaultProps & {
    direction?: DIVIDER_DIRECTION
}

export const Divider = ({ className, direction = DIVIDER_DIRECTION.PARALLEL }: DivierProps) => {
    return (
        <StyledDivider role="divider" className={className} data-direction={direction} />
    )
}