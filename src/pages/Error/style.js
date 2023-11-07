import styled from "styled-components";

export const ErrorStyled = styled.div`
    height: 97.5vh;
    width: 100vw;
    background: black;
    text-align: center;
    .errotop{
        width: 100vw;
        height: 200px;
        background-color: gray;
    }
    .erro404{
        color: yellow;
        font-size: 200px;
        font-weight: 900;
    }
    .erropage{
        margin-top: 30px;
        font-size: 70px;
    }
    .errobutton{
        margin-top: 30px;
        font-size: 30px;
        font-weight: 500;
        a{
            color: black;
            text-decoration: none;
        }
    }
    .errobot{
        position: fixed; /* Adicione esta linha */
        bottom: 0; /* Adicione esta linha */
        margin-top: 50px;
        width: 100vw;
        height: 200px;
        background-color: gray;
        
    }
`