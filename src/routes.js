const express = require('express');
const IntexController = require('./controllers/IndexController');
const SessionController = require('./controllers/SessionController');
const ServicesController = require('./controllers/ServicesController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
routes.get('/', IntexController.show);

routes.post('/sessions', SessionController.store);

routes.get('/services', ServicesController.show);
routes.post('/services', ServicesController.store);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;