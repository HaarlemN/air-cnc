import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, Logo, Content } from './styles';

import SpotList from '../../components/SpotList';

import logo from '../../assets/logo.png';

import {
  connect,
  disconnect,
  subscribeToBookings,
} from '../../services/socket';

export default function List() {
  const [techs, setTechs] = useState([]);

  const setupWebsocket = useCallback(() => {
    disconnect();

    AsyncStorage.getItem('user_id').then(user_id => {
      connect(user_id);

      subscribeToBookings(booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} para o dia ${
            booking.date
          } foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`,
        );
      });
    });
  }, []);

  useEffect(() => {
    let isActive = true;

    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      if (isActive) {
        setTechs(techsArray);
        setupWebsocket();
      }
    });

    return () => {
      isActive = false;
    };
  }, [setupWebsocket]);

  return (
    <Container>
      <Logo source={logo} style={{ resizeMode: 'contain' }} />

      <Content>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </Content>
    </Container>
  );
}
