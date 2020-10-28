import styled from 'styled-components';

export const MyButton = styled.button`
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 4.6rem;
  padding: 0 20px;
  font-size: 1.6rem;
  font-weight: bold;
  background: #f05a5b;
  color: #fff;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(80%);
  }
`;
