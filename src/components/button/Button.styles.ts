import styled from "styled-components";
import { BUTTON_SIZE } from "./types/ButtonSize";

export const StyledButton = styled.button`
    display: inline-flex;

    background-color: #0095ff;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.15385;
    margin: 0;
    outline: none;
    position: relative;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: baseline;
    white-space: nowrap;

    &[data-disabled=true]{
        pointer-events: none;
        background-color: gray;
        opacity: 0.5;
    }


    &[data-size = ${BUTTON_SIZE.L}]{
        padding: 16px 14px;
    }

    &[data-size = ${BUTTON_SIZE.M}]{
        padding: 12px 10px;
    }

    &[data-size = ${BUTTON_SIZE.S}]{
        padding: 8px 6px;
    }
`