import styled from 'styled-components';
import { shade } from 'polished';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h3{
        color: white;
        widht: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 1.3em;
        margin-bottom: 5px;
    }
    p{
        margin-top: 18px;
    }
    width: 30vw;
    background-color: #47C8E7;
    border-radius: 7px;
    padding: 30px;
    cursor: pointer;

`;