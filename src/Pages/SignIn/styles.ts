import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Left = styled.section`
    width: 100%;
    height: 100%;
    max-width: 60vw;
    img{
        height: 100vh;
    }
`;

export const Right = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-width: 40vw;
    flex-direction: column;
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #E4E6ED;
    min-width: 80%;
    min-height: 70%;
    border-radius: 15px;
    height: 100%;
    padding: 30px ;

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
