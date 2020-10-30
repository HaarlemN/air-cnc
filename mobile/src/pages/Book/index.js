import React, { useState } from 'react';
import { Alert, TouchableNativeFeedback } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Label,
  DatePicker,
  DateText,
  Button,
  CancelButton,
  ButtonText,
} from './styles';

import api from '../../services/api';

export default function Book() {
  const navigation = useNavigation();
  const route = useRoute();

  const [date, setDate] = useState('');
  const [showDate, setShowDate] = useState(new Date());
  const [viewDatePicker, setViewDatePicker] = useState(false);
  const { id } = route.params;

  const locale = 'pt-BR';
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };

  function handleDatePickerVisible() {
    setViewDatePicker(!viewDatePicker);
  }

  function changeTimeState(event, selectedDate) {
    handleDatePickerVisible();
    setShowDate(selectedDate || showDate);
    setDate(
      selectedDate ? selectedDate.toLocaleDateString(locale, options) : date,
    );
  }

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user_id');

    if (date) {
      try {
        await api.post(
          `/spots/${id}/bookings`,
          {
            date,
          },
          {
            headers: { user_id },
          },
        );

        Alert.alert('Solicitação de reserva enviada.');
        navigation.navigate('list');
      } catch (err) {
        Alert.alert('Falha ao enviar solicitação.');
      }
    } else {
      Alert.alert('Escolha uma data.');
    }
  }

  function handleCancel() {
    navigation.navigate('list');
  }

  return (
    <Container>
      <Label>Data de interesse *</Label>
      <TouchableNativeFeedback onPress={handleDatePickerVisible}>
        <DatePicker>
          <DateText>{date || 'Qual data deseja reservar?'}</DateText>
        </DatePicker>
      </TouchableNativeFeedback>
      {viewDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={showDate}
          mode="date"
          display="default"
          onChange={changeTimeState}
        />
      )}
      <Button onPress={handleSubmit}>
        <ButtonText>Solicitar reserva</ButtonText>
      </Button>
      <CancelButton onPress={handleCancel}>
        <ButtonText>Cancelar</ButtonText>
      </CancelButton>
    </Container>
  );
}
