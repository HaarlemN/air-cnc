import React from 'react';

import { MyForm } from './styles';

function Form({ onSubmit, children }) {
  return (
    <MyForm onSubmit={onSubmit}>
      {children}
    </MyForm>
  );
}

export default Form;
