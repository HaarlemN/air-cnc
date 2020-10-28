import React from 'react';

import { MyButton } from './styles';

export default function Button({ children, ...buttonProps }) {
  return (
    <MyButton {...buttonProps}>
      {children}
    </MyButton>
  );
}
