import styled from "styled-components";
import { DIVIDER_DIRECTION } from "./types";

export const StyledDivider = styled.div`
    border-color: hsla(200, 10%, 50%,100);
    border: none;

    &[data-direction=${DIVIDER_DIRECTION.PARALLEL}]{
        height: 1px;
        border-top: 1px solid;
    }

    &[data-direction=${DIVIDER_DIRECTION.VERTICAL}]{
        border-left: 1px solid;
        width: 1px;
    }
`