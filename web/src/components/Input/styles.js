import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: #444;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const MyInput = styled.input`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 4.8rem;
  padding: 0 15px;
  font-size: 1.6rem;
  transition: border 0.3s;

  &:hover,
  &:focus {
    border: 1px solid #f05a5b;
  }
`;
