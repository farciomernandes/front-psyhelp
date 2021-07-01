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

export const Speciality = styled.section`
    margin-top: 8px;
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #E4E6ED;
    border-radius: 15px;
    padding: 30px;
    margin: 8px 0;

    div{
        display: flex;
    }
    

    form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    h2{
        font-family: "Roboto";
        font-weight: bold;
    }



    h1{
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
