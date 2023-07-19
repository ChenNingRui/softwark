import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const StyledTitle = styled.label`
    font-weight: 600;
`

export const StyledLeftMarginWrapper = styled.div`
    margin-left: 30px;
`

export const StyledIndexLabels = styled.h5`
    margin: 10.8px;
`

export const StyledRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const StyledColrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledGrid = styled.div<{ cols: string[] }>`
    display: grid;
    grid-template-columns: repeat(${props => props.cols.length}, 30px);
`

export const StyledCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`