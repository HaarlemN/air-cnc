import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import {
  connect,
  disconnect,
  subscribeToNewBookings,
} from '../../services/socket';

import {
  SpotList,
  SpotListItem,
  Header,
  Paragraph,
  StrongText,
  Span,
  NotificationsList,
  NotificationsListItem,
  NotificationsButton,
} from './styles';

import Button from '../../components/Button';

export default function Dashboard() {
  const history = useHistory();

  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const user_id = localStorage.getItem('user_id');

  const setupWebsocket = useCallback(() => {
    disconnect();

    connect(user_id);
  }, [user_id]);

  useEffect(() => {
    subscribeToNewBookings(data => {
      setRequests([...requests, data]);
    });
  }, [requests]);

  useEffect(() => {
    let isActive = true;

    api
      .get('/dashboard', {
        headers: {
          user_id,
        },
      })
      .then(response => {
        if (isActive) {
          setSpots(response.data);
          setupWebsocket();
        }
      });

    return () => {
      isActive = false;
    };
  }, [user_id, setupWebsocket]);

  const handleAccept = useCallback(
    async id => {
      await api.post(`/bookings/${id}/approvals`);

      setRequests(requests.filter(request => request._id !== id));
    },
    [requests],
  );

  const handleReject = useCallback(
    async id => {
      await api.post(`/bookings/${id}/rejections`);

      setRequests(requests.filter(request => request._id !== id));
    },
    [requests],
  );

  return (
    <>
      <NotificationsList>
        {requests.map(request => (
          <NotificationsListItem key={request._id}>
            <Paragraph>
              <StrongText>{request.user.email}</StrongText> está solicitando uma
              reserva em <StrongText>{request.spot.company}</StrongText> para{' '}
              <StrongText>{request.date}</StrongText>
            </Paragraph>

            <NotificationsButton
              type="button"
              className="accept"
              onClick={() => handleAccept(request._id)}
            >
              ACEITAR
            </NotificationsButton>
            <NotificationsButton
              type="button"
              className="reject"
              onClick={() => handleReject(request._id)}
            >
              REJEITAR
            </NotificationsButton>
          </NotificationsListItem>
        ))}
      </NotificationsList>
      <SpotList>
        {spots.map(spot => (
          <SpotListItem key={spot._id}>
            <Header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <StrongText>{spot.company}</StrongText>
            <Span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</Span>
          </SpotListItem>
        ))}
      </SpotList>

      <Button onClick={() => history.push('/new')}>Cadastrar novo Spot</Button>
    </>
  );
}
