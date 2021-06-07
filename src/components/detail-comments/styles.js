import styled from 'styled-components';
import { shade } from 'polished';



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

export const PostField = styled.div`
    height: 100%;
`;

export const CommentedField = styled.section`
    img{
        height: 60px;
        width: 60px;
        border-radius: 200px;
    }
    h3{
        margin-left: 5px;
    }
    color: #696A6D;
    font-size: 0.7em;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const AllComments = styled.div`
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & + div{
        margin-top: 18px;
    }
`;

export const CommentText = styled.section`
    margin-left: 18px;
    width: 100%;
    font-size: 0.7em;
    height: 100%;
    flex-wrap: wrap;
    display: flex;
    height: 100%;

`;

export const CommentaryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    textarea{
        background-color: #DDDDDD;
        border: none;
        width: 100%;
        min-height: 80px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin-top: 10px;
`;

export const LoggedUser = styled.section`
    border-top: 1px solid black;
    padding: 5px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    margin-top: 10px;
`;

export const Button = styled.button`
    margin-top: 8px;
    background-color: #47C8E7;
    color: white;
    font-weight: bold;
    max-width: 84px;
    width: 100%;
    min-width: 120px;
    height: 50px;
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

export const Locale = styled.section`
    display: flex;
    flex-direction: row !important;
    width: 100%;
    p{
    }
    margin: 18px 0;
`;