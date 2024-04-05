import styled from "styled-components";

export const Back = styled.div`
width: 100px;
height: 100px;
background: red;
display: ${({ visible }) => visible ? 'block' : 'none'};
`