import React from 'react';

import { Container, Label, MyInput } from './styles';

function Input({ label, name, ...inputProps }) {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <MyInput id={name} {...inputProps} />
    </Container>
  );
}

export default Input;
