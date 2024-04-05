import pulso from "styled-components";

export const MyStyledComponent = pulso.div`
width: 100px;
height: 100px;
background: red;
background-color: ${({ x }) => x};
`
