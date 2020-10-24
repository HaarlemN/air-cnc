import socketio from 'socket.io-client';

const socket = socketio('http://localhost:3333', {
  autoConnect: false,
});

function subscribeToNewBookings(subscribeFunction) {
  socket.on('booking_request', subscribeFunction);
}

function connect(user_id) {
  socket.io.opts.query = {
    user_id,
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewBookings };
