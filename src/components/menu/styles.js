import styled from 'styled-components';
import { Link } from 'react-router-dom';


import { shade } from 'polished';



export const Container = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: column;
    input{
        background-color: rgba(244, 248, 251, 0.91);
    }
    height: 100%;
    span{
        color: #2DC1E3;
    }
    min-width: 25vw;
    background-color: #FFFF;

`;

export const Content = styled.div`
    padding: 0 15px;
    height: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
`;

export const Item = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;
    width: 50%;
    & + section{
        margin-top: 10px;
    }
    p{
        margin-left: 5px;
    }

    &:hover {
        cursor: pointer;
        color: ${shade(0.2, '#2DC1E3')};
  }
`;
export const LinkButton = styled(Link)`
    color: black;
    &:hover {
        cursor: pointer;
        color: ${shade(0.2, '#2DC1E3')};
  }
  padding: 15px 0;
  width: 80%;
  text-decoration: none;

`;