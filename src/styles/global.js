import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
  body{
    background: #EAF0F8;
    color: #000;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
  }
  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }
    button {
      cursor: pointer;
    }
  }
`;