import socketio from 'socket.io-client';

const socket = socketio('http://10.255.1.79:3333', {
  autoConnect: false,
});

function subscribeToBookings(subscribeFunction) {
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

export { connect, disconnect, subscribeToBookings };
