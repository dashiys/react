import styled from "styled-components";

export const Box = styled.div`
width: 100px;
height: 100px;
border: 1px solid black;
background-color: ${(props) => props.color || "red"};
background-color: ${({ color }) => color};
margin: ${(props) => props.m}px;
margin: ${({ m }) => m}px;
span {
    font-weight: bold;
}
    `