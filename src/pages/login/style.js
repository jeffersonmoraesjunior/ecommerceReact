import styled from 'styled-components'

export const LoginStyled = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: 600px;
    height: 400px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    background-color: #2352553d;
    h1{
        text-align: center;
        margin-top: 20px;
        font-size: 50px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        input{
            width: 50%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid black;
            border-radius: 5px;
        }
        button{
            width: 50%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid black;
            border-radius: 5px;
            background-color: #555c97;
            color: white;
        }
        button:hover{
            background-color: #454862;
            color: white;
        }
    }
    p{
        color: #454862;
        a{
            color: blue;
        }
    }
`