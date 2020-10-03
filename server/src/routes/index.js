const express = require('express');

// Routes
const sessions = require('./sessions.routes');
const spots = require('./spots.routes');
const dashboard = require('./dashboard.routes');
const bookings = require('./bookings.routes');

const routes = express.Router();

routes.use(sessions);
routes.use(spots);
routes.use(dashboard);
routes.use(bookings);

module.exports = routes;
