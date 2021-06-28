import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
    text-align: center;
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #E4E6ED;
    border-radius: 15px;
    padding: 30px;
    margin: 18px 0;
    max-width: 90vw;

    div{
        display: flex;
    }
    

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    h2{
        margin-bottom: 2em;
        font-family: "Roboto";
        font-weight: bold;
    }



    h1{
        margin-bottom: 2vh;
        font-size: 2em;
        font-family: "Roboto";
        font-weight: bold;
        span{
            color: #2DC1E3;
        }
    }
    a{
        color: black;
    }
    max-height: 80vh;

`;

export const DeleteAccount = styled.section`
    border: 2px solid red;
    border-radius: 7px;
    padding: 10px 15px;
    color: red;
    cursor: pointer;
`;

export const BottonItens = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`;