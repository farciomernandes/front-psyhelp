import styled from 'styled-components';
import { shade } from 'polished';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    input{
        background-color: rgba(244, 248, 251, 0.91);
    }
    max-height: 100vh;
    span{
        color: #2DC1E3;
    }
    width: 20vw;
    background-color: #FFFF;

`;

export const Content = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const User = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 220px;
    min-height: 242px;
    flex-direction: column;
    img{
        height: 110px;
        width: 110px;
        border-radius: 200px;
    }
    h2{
        font-size: 1.1em;
        width: 100%;
        font-weight: 700;
        text-align: center;
        margin-top: 8px;
    }
    p{
        font-size: 0.7em;
        color: #B8BBC5;
    }
`;


export const Button = styled.div`
    background-color: #47C8E7;
    color: white;
    font-weight: bold;
    min-width: 84px;
    min-height: 23px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 60%;
    padding: 7px 15px;
    a{
        text-decoration: none;
        color: white;
    }
    a:link 
{ 
 text-decoration:none; 
} 

    &:hover {
    background: ${shade(0.2, '#47C8E7')};
  }

`;

export const Locale = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin-left: 5px;
    }
    margin: 18px 0;
`;