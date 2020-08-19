const express = require('express');

const IntexController = require('./controllers/IndexController');
const LogonController = require('./controllers/LogonController')
const SessionController = require('./controllers/SessionController');
const BudgetController = require('./controllers/BugetController');
const DashController = require('./controllers/DashController');

//Validar esse depois!!!!!!!!!!!!!!!!!!!!!!!
const ServiceController = require('./controllers/ServiceController');

const routes = express.Router();

//API-Status--------------------
routes.get('/', IntexController.show);

//Dash--------------------------
routes.get('/getbasic', DashController.basic);

//Show--------------------------
routes.get('/services', ServiceController.show);
routes.get('/sessions', SessionController.show);
routes.get('/showbudgets', BudgetController.show);

//Store--------------------------
routes.post('/sessions', SessionController.store);
routes.post('/logon', LogonController.logon);
routes.post('/newbudget', BudgetController.store);
routes.post('/newservice', ServiceController.store);

//Update--------------------------

//Delete--------------------------
routes.delete('/deletebudget/:budget_id', BudgetController.delete);



module.exports = routes;