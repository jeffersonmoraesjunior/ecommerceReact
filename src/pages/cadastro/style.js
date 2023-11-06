import styled from 'styled-components';

export const CadastraStyled = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    width: 600px;
    height: 500px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    background-color: #2352553d;
    h1 {
        text-align: center;
        margin-top: 20px;
        font-size: 50px;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 20px;
        input {
            width: 75%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid black;
            border-radius: 5px;
        }
        button {
            width: 50%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid black;
            border-radius: 5px;
            background-color: #b8c0ff;
            color: white;
        }
        button:hover {
            background-color: #b8c0ff;
            color: white;
        }
    }
`;
