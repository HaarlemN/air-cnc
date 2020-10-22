import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import api from "../../services/api";

export default function Login() {
  const history = useHistory();
  
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    api.post("/sessions", { email }).then((response) => {
      const { _id } = response.data;

      localStorage.setItem("user_id", _id);

      history.push("/dashboard");
    });
  }

  return (
    <>
      <p>
        Ofereça <strong>Spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
