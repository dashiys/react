import styled from "styled-components"

export const Titulo = styled.div`
display: flex;
`
export const Btn = styled.button`
border: 0;
background-color: transparent;
        `;

export const Btn2 = styled.button`
border: 0;
background-color: transparent;
transform: rotate(180deg);
        `;


export const Container = styled.div`
display: flex;
        `;

export const Pequeñas = styled.div`
display: flex;
flex-wrap: wrap;

        `;

export const Grande = styled.div`
width: 65%;
img{
        width: 100%;
       
}

        `;

export const Img = styled.img`
border: ${({ ilumina }) => ilumina ? '3px solid red' : '3px solid transparent'};
width: 300px;
border-radius: 25%;
`
