import styled from "styled-components";

export const StyledWrapper = styled.div`
    position: relative;
    width: 150px;

    &[data-disabled=true]{
        pointer-events: none;
    }
`

export const StyledSelectedBar = styled.div`
    display: flex;
    margin-bottom: 0.25rem;
    padding: 0.3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-weight: 500;
    font-size: 14px;
    color: black;
    background: white;
    height: 12px;

    &[data-disabled=true]{
        background: gray;
        opacity: 0.5;
    }
`

export const StyledMenu = styled.ul`
    position: absolute;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: black;
    font-size: 14px;
    font-weight: 500;
    z-index: 1;
    &:first-child {
        padding-top: 0.8em;
    }

    max-height: 200px;
    overflow-y: auto;
`

export const StyledMenuItem = styled.div`
    list-style: none;
    padding: 0.1rem;
    display: flex;
    justify-content: flex-start;

    &:hover{
        background-color: skyblue;
        color: white;
    }
`

export const StyledLabel = styled.label`
    position: absolute;
    top: -16px;
    display: flex;

    font-size: 12px;
`