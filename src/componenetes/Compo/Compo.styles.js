import styled, { createGlobalStyle } from 'styled-components';
import font from "./PlayfairDisplay-Italic-VariableFont_wght.ttf"

const desktopStartWidth = 700;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: 300px)`;

export const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: myFont;
        src: url(${font});
    }
	body {
		background-color: yellow;
        font-family: myFont;
	}
`;

export const Box = styled.div`
    background-color: salmon;
    padding: 30px;
    width: 100px;
    &:hover {
	background-color: paleGreen
    }
    ${desktop} {
		width:100%;
	}
    ${mobile}{
    width: 100%;
    }
    
`;
export const Heredar = styled(Box)`
    width: 200px;
    background-color: ${({ hola }) => hola};
    &:hover {
	background-color: blue
    }
`;


