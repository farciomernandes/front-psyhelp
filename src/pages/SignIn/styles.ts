import styled from 'styled-components';

import signInIMG from '../../assets/signin.svg';



export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
    span{
            color: #2DC1E3;
        }
    text-align: center;
`;

export const Left = styled.section`
    flex: 1;
    background: url(${signInIMG}) no-repeat center;
    background-size: cover;
    min-width: 50vw;
    overflow: hidden;

`;

export const Right = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #E4E6ED;
    border-radius: 15px;
    height: 100%;
    padding: 30px;
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
        margin-bottom: 10vh;
        font-size: 2em;
        font-family: "Roboto";
        font-weight: bold;
    }
    a{
        color: black;
    }

`;
