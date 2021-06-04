import styled from 'styled-components';


export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 10px;
  height: 50px;
  width: 90%;
  display: flex;
  align-items: center;
  color: #666660;

  & + div {
    margin-top: 18px;
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4edeb;
    &::placeholder {
      color: #666660;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
