import React, { useState, useEffect } from "react";
import socketio from "socket.io-client";
import { Alert, AsyncStorage } from "react-native";
import { Container, Logo, Content } from "./styles";

import SpotList from "../../components/SpotList";

import logo from "../../assets/logo.png";

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("user_id").then((user_id) => {
      const socket = socketio("http://192.168.15.10:3001", {
        query: { user_id },
      });

      socket.on("booking_response", (booking) => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} para o dia ${
            booking.date
          } foi ${booking.approved ? "APROVADA" : "REJEITADA"}`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("techs").then((storagedTechs) => {
      const techsArray = storagedTechs.split(",").map((tech) => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <Container>
      <Logo source={logo} style={{ resizeMode: "contain" }} />

      <Content>
        {techs.map((tech) => (
          <SpotList key={tech} tech={tech} />
        ))}
      </Content>
    </Container>
  );
}
