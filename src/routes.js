const express = require('express');

const IntexController = require('./controllers/IndexController');
const LogonController = require('./controllers/LogonController')
const SessionController = require('./controllers/SessionController');
const BudgetControlle = require('./controllers/BugetController');

//Validar esses dois depois!!!!!!!!!!!!!!!!!!!!!!!
const ServiceController = require('./controllers/ServiceController');
const SubServiceController = require('./controllers/SubServiceController');

const routes = express.Router();


//API-Status--------------------
routes.get('/', IntexController.show);

//Show--------------------------
routes.get('/newservice', ServiceController.show);
routes.get('/newsub', SubServiceController.show);
routes.get('/showbudgets', BudgetControlle.show);


//Store--------------------------
routes.post('/sessions', SessionController.store);
routes.post('/logon', LogonController.logon);
routes.post('/newbudget', BudgetControlle.store);


routes.post('/newservice', ServiceController.store);
routes.post('/newsub', SubServiceController.store);


//Update--------------------------

//Delete--------------------------
routes.delete('/deletebudget/:budget_id', BudgetControlle.delete);



module.exports = routes;