import styled from "styled-components"

export const Container = styled.div`
display: flex;
margin-left: 25%;
        `;

export const Titulo = styled.h1`
text-align: center;
margin-bottom: 50px;
        `;

export const Respuesta = styled.div`
display: flex; 
align-items: center;
        `;


export const Boton = styled.button`
height: 24px;
margin-right: 10px;
        `;

export const Img = styled.img`
width: 250px;
margin-left: 200px;
        `;

export const Back = styled.div`
position: absolute;
top: 0;
left: 35%;
background-color: lightblue;
border: 2px solid #647e86;
border-radius: 20%;
padding: 80px 80px 5px ;
display: ${({ $visible }) => $visible ? 'flex' : 'none'};
flex-direction: column;
`

export const Btn = styled.button`
margin-top: 40px;
border-radius: 20%;

`

export const Letra = styled.h4`
font-family: Georgia, 'Times New Roman', Times, serif;
font-size: x-large;
`