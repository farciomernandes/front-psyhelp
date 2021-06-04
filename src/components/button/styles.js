import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.button`
  background: #ffff;
  height: 48px;
  border-radius: 10px;


  border: 0;
  padding: 0 16px;
  width: 90%;
  color: #312e38;
  font-weight: 500;
  margin-top: 28px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#fff8')};
  }

  margin-bottom: 28px;
`;
