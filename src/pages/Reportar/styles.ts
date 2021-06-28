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
    max-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #E4E6ED;
    border-radius: 15px;
    padding: 30px;
    margin: 18px 0;

    div{
        display: flex;
    }
    

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
        input, textarea{
            width: 30vw;
            margin: 20px 0;
            padding: 10px;
        }
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

`;

export const DeleteAccount = styled.section`
    border: 2px solid red;
    border-radius: 7px;
    margin-top: 20px;
    padding: 10px 15px;
    color: red;
    cursor: pointer;
`;