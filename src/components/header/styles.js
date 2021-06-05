import styled from 'styled-components';



export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    input{
        background-color: rgba(244, 248, 251, 0.91);
    }
    max-height: 100vh;
    span{
        color: #2DC1E3;
    }
    position: absolute;
    top: 15px;
    right: 5px;
`;

export const Content = styled.div`
    display: flex;  
    img{
        width: 60px;
        height: 60px;
        border-radius: 200px;
    }
    color: #696A6D;

    h2{
        font-size: 1.2em;
    }
    p{
        font-size: 0.9em;
    }
    section{
        margin:0 5px;
    }
`;