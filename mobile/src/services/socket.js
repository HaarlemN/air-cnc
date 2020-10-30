import socketio from 'socket.io-client';

const socket = socketio('http://host:port', {
  autoConnect: false,
});

function subscribeToBookings(subscribeFunction) {
  socket.on('booking_response', subscribeFunction);
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
