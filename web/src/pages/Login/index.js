import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import api from '../../services/api';

import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';

const Paragraph = styled.p`
  font-size: 2.3rem;
  line-height: 3.1rem;
  margin-bottom: 3.1rem;
`;

const StrongText = styled.strong``;

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      api.post('/sessions', { email }).then(response => {
        const { _id } = response.data;

        localStorage.setItem('user_id', _id);

        history.push('/dashboard');
      });
    },
    [email, history],
  );

  return (
    <>
      <Paragraph>
        Ofereça <StrongText>Spots</StrongText> para programadores e encontre{' '}
        <StrongText>talentos</StrongText> para sua empresa
      </Paragraph>

      <Form onSubmit={handleSubmit}>
        <Input
          label="E-mail *"
          name="email"
          type="text"
          required
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <Button type="submit">Entrar</Button>
      </Form>
    </>
  );
}
