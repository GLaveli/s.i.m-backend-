const express = require('express');

const IntexController = require('./controllers/IndexController');
const SessionController = require('./controllers/SessionController');
const ServiceController = require('./controllers/ServiceController');
const SubServiceController = require('./controllers/SubServiceController');

const routes = express.Router();


//API-Status--------------------
routes.get('/', IntexController.show);

//Show--------------------------
routes.get('/sessions', SessionController.show);
routes.get('/newservice', ServiceController.show);
routes.get('/newsub', SubServiceController.show);


//Store--------------------------
routes.post('/sessions', SessionController.store);
routes.post('/newservice', ServiceController.store);
routes.post('/newsub', SubServiceController.store);


//Update--------------------------

//Delete--------------------------
module.exports = routes;