import { DefaultProps } from "../../types"
import { StyledTitle, StyledWrapper } from "./Header.styles"

type Props = DefaultProps & {
    title: string
}

export const Header = ({ className, title, children }: Props) => {
    return (
        <StyledWrapper className={className} role="header">
            <StyledTitle role="title" >{title}</StyledTitle>
            {children}
        </StyledWrapper>
    )
}