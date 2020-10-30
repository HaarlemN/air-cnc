import React, { useState, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Span } from './styles';

import Button from '../../components/Button';
import Form from '../../components/Form';
import DropZone from '../../components/DropZone';
import Input from '../../components/Input';

import camera from '../../assets/camera.svg';

import api from '../../services/api';

export default function NewSpot() {
  const history = useHistory();

  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(
    () => (thumbnail ? URL.createObjectURL(thumbnail) : null),
    [thumbnail],
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const data = new FormData();
      const user_id = localStorage.getItem('user_id');

      data.append('thumbnail', thumbnail);
      data.append('company', company);
      data.append('techs', techs);
      data.append('price', price);

      await api.post('/spots', data, {
        headers: {
          user_id,
        },
      });

      history.push('/dashboard');
    },
    [company, history, price, techs, thumbnail],
  );

  return (
    <Form onSubmit={handleSubmit}>
      <DropZone
        name="thumbnail"
        type="file"
        alt="Select img"
        source={camera}
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
        onChange={(event) => setThumbnail(event.target.files[0])}
      />

      <Input
        label="Empresa *"
        name="company"
        placeholder="Sua empresa"
        required
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <Input
        label={
          <>
            Tecnologias * <Span>(separadas por vírgula)</Span>
          </>
        }
        name="techs"
        placeholder="Quais tecnologias usam?"
        required
        value={techs}
        onChange={(event) => setTechs(event.target.value)}
      />

      <Input
        label={
          <>
            Valor da diária <Span>(em branco para GRATUITO)</Span>
          </>
        }
        name="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
