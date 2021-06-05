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