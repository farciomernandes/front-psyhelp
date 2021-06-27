import styled,{ css } from 'styled-components';

interface ContainerProps{
  isFocused: boolean;
  isField: boolean;
}


export const Container = styled.div<ContainerProps>`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 10px;
  height: 45px;
  width: 90%;
  display: flex;
  align-items: center;
  color: #666660;
  border: 2px solid #FFFFFF;

  & + div {
    margin-top: 18px;
  }

  ${props=> props.isFocused && css`

    color: #2DC1E3;
    border-color: #2DC1E3;
;
  `}


  ${props=> props.isField && css`

    color: #2DC1E3;
;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: black;
    &::placeholder {
      color: #666660;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
