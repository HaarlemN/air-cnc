import styled from 'styled-components';

export const Label = styled.label`
  font-size: 1.5rem;
  color: #444;
  font-weight: bold;

  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  cursor: pointer;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  &.has-thumbnail {
    border: 0;
  }
`;

export const Image = styled.img`
  object-fit: cover;

  &.has-thumbnail {
    display: none;
  }
`;

export const Input = styled.input`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 4.8rem;
  padding: 0 15px;
  font-size: 1.6rem;
  transition: border 0.3s;

  display: none;
`;
