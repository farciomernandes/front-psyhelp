import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color: #FFFF;

`;

export const User = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    margin-left: 5px;

    img{
        height: 80px;
        width: 80px;
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
export const Info = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
`;

export const CommentField = styled.div`
    height: 100%;
`;


export const Buttons = styled.div`
    margin-top: 18px;
    border-top: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Button = styled.button`
    margin-top: 8px;
    background-color: #47C8E7;
    color: white;
    font-weight: bold;
    max-width: 84px;
    width: 100%;
    min-width: 120px;
    min-height: 23px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 60%;
    padding: 7px 15px;

    &:hover {
    background: ${shade(0.2, '#47C8E7')};
  }
  
`;
export const LinkButton = styled(Link)`
    text-decoration: none;
    color: white;
`;

export const Locale = styled.section`
    display: flex;
    flex-direction: row !important;
    width: 100%;
    p{
    }
    margin: 18px 0;
`;