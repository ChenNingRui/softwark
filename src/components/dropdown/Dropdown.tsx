import { useRef } from "react"
import { DefaultProps } from "../../types"
import { useOnClickOutside, useToggle } from "../../useHooks"
import { StyledLabel, StyledMenu, StyledMenuItem, StyledSelectedBar, StyledWrapper } from "./Dropdown.styles"

type Props = DefaultProps & {
    selected: string,
    menuItems: string[]
    onSelect: (value: string) => void
    header?: string
    disabled?: Boolean
}

export const Dropdown = ({
    className,
    selected,
    menuItems,
    header,
    disabled = false,
    onSelect }: Props) => {
    const [active, onToggle, setToggle] = useToggle(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(dropdownRef, () => setToggle(false))

    const renderMenu = active &&
        <StyledMenu role="menu">
            {
                menuItems.map((item) => <StyledMenuItem
                    key={item}
                    onClick={() => {
                        onSelect(item)
                        setToggle(false)
                    }}>{item}</StyledMenuItem>)
            }
        </StyledMenu>

    return (
        <StyledWrapper
            data-disabled={disabled}
            role="dropdown"
            ref={dropdownRef}
            className={className}>
            <StyledLabel>{header}</StyledLabel>
            <StyledSelectedBar
                data-disabled={disabled}
                role="selectedBar"
                onClick={onToggle}>
                {selected}</StyledSelectedBar>
            {renderMenu}
        </StyledWrapper>
    )
}