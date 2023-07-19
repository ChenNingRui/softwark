import styled from "styled-components";

export const StyledWrapper = styled.div`
    z-index: 1;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);

    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

export const StyledHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledPanel = styled.div`
    display: flex;
    flex-direction: column;

    width: 30%;
    height: 30%;

    background-color: white;
    justify-content: space-between;

    padding: 1rem;;
`

export const StyledChildWrapper = styled.div`
    flex-grow: 2;
    padding: .25rem;
`