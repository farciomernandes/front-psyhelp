import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: #EAF0F8;
`;

export const Content = styled.header`
    width: 75%;
    margin-left: 25%;
    display: flex;
    flex-direction: column;
`;

export const Items = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap; 
    margin-top: 18vh;

    div{
        margin: 10px 20px;
    }
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
        span{
            color: #2DC1E3;
        }
    }
    a{
        color: black;
    }

`;