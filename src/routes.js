const express = require('express');
const SessionController = require('./controllers/SessionController');
const ServicesController = require('./controllers/ServicesController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/services', ServicesController.store);

module.exports = routes;