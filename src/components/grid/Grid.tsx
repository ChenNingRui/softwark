import { Cell } from "../../types"
import { StyledCell, StyledColrapper, StyledGrid, StyledIndexLabels, StyledLeftMarginWrapper, StyledRowWrapper, StyledTitle, StyledWrapper } from "./Grid.styles"

type Props = {
    cells: Cell[],
    rows: string[],
    cols: string[],
    title?: string
}

export const Grid = ({ cells, rows, cols, title }: Props) => {
    const renderGrid = cells.map((cell) => {
        const key = cell.key
        return <StyledCell key={key}>
            {cell.state}
        </StyledCell>
    }
    )

    const renderRowIndexs = rows.map((row) =>
        <StyledIndexLabels key={row}>{row}</StyledIndexLabels>
    )

    const renderColIndexs = cols.map((col) =>
        <StyledIndexLabels key={col}>{col}</StyledIndexLabels>
    )

    return (
        <StyledWrapper>
            {title && <StyledTitle>{title}</StyledTitle>}
            <StyledLeftMarginWrapper>
                <StyledRowWrapper>
                    {renderRowIndexs}
                </StyledRowWrapper>
            </StyledLeftMarginWrapper>
            <StyledRowWrapper>
                <StyledColrapper>
                    {renderColIndexs}
                </StyledColrapper>
                <StyledGrid cols={cols}>
                    {renderGrid}
                </StyledGrid>
            </StyledRowWrapper>
        </StyledWrapper>
    )
}