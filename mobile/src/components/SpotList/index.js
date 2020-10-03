import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Title,
  Tech,
  List,
  ListItem,
  Thumbnail,
  Company,
  Price,
  Button,
  ButtonText,
} from "./styles";

import api from "../../services/api";

export default function SpotList({ tech }) {
  const [spots, setSpots] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    async function loadSpots() {
      const response = await api.get("/spots", {
        params: { tech },
      });

      setSpots(response.data);
    }
    loadSpots();
  }, []);

  function handleNavigate(id) {
    navigation.navigate("book", { id });
  }

  return (
    <Container>
      <Title>
        Empresas que utilizam <Tech>{tech}</Tech>
      </Title>

      <List
        data={spots}
        keyExtractor={(spot) => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem>
            <Thumbnail
              style={{ resizeMode: "cover" }}
              source={{ uri: item.thumbnail_url }}
            />
            <Company>{item.company}</Company>
            <Price>{item.price ? `R$${item.price}` : "GRATUITO"}</Price>
            <Button onPress={() => handleNavigate(item._id)}>
              <ButtonText>Solicitar reserva</ButtonText>
            </Button>
          </ListItem>
        )}
      />
    </Container>
  );
}
