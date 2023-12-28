import styled from "styled-components"

export const Button = styled.button`
    width: 342px;
    height: 68px;

    background: #D93856;
    border: none;

    color: #FFF;
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 900;
    line-height: 2.5px; /* 14.706% */

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`