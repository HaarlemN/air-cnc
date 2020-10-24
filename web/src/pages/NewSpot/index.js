import React, { useState, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

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
    <form onSubmit={handleSubmit}>
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
        htmlFor="file"
      >
        <input
          id="file"
          type="file"
          onChange={(event) => setThumbnail(event.target.files[0])}
        />
        <img src={camera} alt="Select img" />
      </label>

      <label htmlFor="company">
        Empresa *
        <input
          id="company"
          name="company"
          placeholder="Sua empresa"
          required
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </label>

      <label htmlFor="techs">
        Tecnologias * <span>(separadas por vírgula)</span>
        <input
          id="techs"
          name="techs"
          placeholder="Quais tecnologias usam?"
          required
          value={techs}
          onChange={(event) => setTechs(event.target.value)}
        />
      </label>

      <label htmlFor="price">
        Valor da diária <span>(em branco para GRATUITO)</span>
        <input
          id="price"
          name="price"
          placeholder="Valor cobrado por dia"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>

      <button className="btn" type="submit">
        Cadastrar
      </button>
    </form>
  );
}
