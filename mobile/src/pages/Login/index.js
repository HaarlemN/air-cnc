import React, { useState, useContext } from "react";

import {
  Container,
  Logo,
  Form,
  Label,
  Input,
  Button,
  ButtonText,
} from "./styles";

import { AuthContext } from "../../routes/context";

import logo from "../../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  const { signIn } = useContext(AuthContext);

  function handleSignIn() {
    signIn(email, techs);
  }

  return (
    <Container>
      <Logo source={logo} />

      <Form>
        <Label>Seu e-mail *</Label>
        <Input
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Label>Tecnologias *</Label>
        <Input
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={(text) => setTechs(text)}
        />

        <Button onPress={handleSignIn}>
          <ButtonText>Encontrar Spots</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
