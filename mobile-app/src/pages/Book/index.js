import React, { useState } from "react";
import { AsyncStorage, Alert } from "react-native";
import {
  Container,
  Label,
  Input,
  Button,
  CancelButton,
  ButtonText,
} from "./styles";

import api from "../../services/api";

export default function Book({ route, navigation }) {
  const [date, setDate] = useState("");
  const { id } = route.params;

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem("user_id");

    try {
      await api.post(
        `/spots/${id}/bookings`,
        {
          date,
        },
        {
          headers: { user_id },
        }
      );

      Alert.alert("Solicitação de reserva enviada.");
      navigation.navigate("list");
    } catch (err) {}
  }

  function handleCancel() {
    navigation.navigate("list");
  }

  return (
    <Container>
      <Label>Data de interesse *</Label>
      <Input
        placeholder="Qual data deseja reservar?"
        placeholderTextColor="#999"
        keyboardType="number-pad"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={(text) => setDate(text)}
      />
      <Button onPress={handleSubmit}>
        <ButtonText>Solicitar reserva</ButtonText>
      </Button>
      <CancelButton onPress={handleCancel}>
        <ButtonText>Cancelar</ButtonText>
      </CancelButton>
    </Container>
  );
}
