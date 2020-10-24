import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import {
  connect,
  disconnect,
  subscribeToNewBookings,
} from '../../services/socket';

import './styles.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const user_id = localStorage.getItem('user_id');

  const setupWebsocket = useCallback(() => {
    disconnect();

    connect(user_id);
  }, [user_id]);

  useEffect(() => {
    subscribeToNewBookings((data) => {
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
      .then((response) => {
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
    async (id) => {
      await api.post(`/bookings/${id}/approvals`);

      setRequests(requests.filter((request) => request._id !== id));
    },
    [requests],
  );

  const handleReject = useCallback(
    async (id) => {
      await api.post(`/bookings/${id}/rejections`);

      setRequests(requests.filter((request) => request._id !== id));
    },
    [requests],
  );

  return (
    <>
      <ul className="notifications">
        {requests.map((request) => (
          <li key={request._id}>
            <p>
              <strong>{request.user.email}</strong> está solicitando uma reserva
              em
              <strong>{request.spot.company}</strong> para a data:{' '}
              <strong>{request.date}</strong>
            </p>

            <button
              type="button"
              className="accept"
              onClick={() => handleAccept(request._id)}
            >
              ACEITAR
            </button>
            <button
              type="button"
              className="reject"
              onClick={() => handleReject(request._id)}
            >
              REJEITAR
            </button>
          </li>
        ))}
      </ul>
      <ul className="spot_list">
        {spots.map((spot) => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button type="button" className="btn">
          Cadastrar novo Spot
        </button>
      </Link>
    </>
  );
}
