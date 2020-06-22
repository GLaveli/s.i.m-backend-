const express = require('express');

const IntexController = require('./controllers/IndexController');
const LogonController = require('./controllers/LogonController')
const SessionController = require('./controllers/SessionController');
const BudgetControlle = require('./controllers/BugetController');

//Validar esse depois!!!!!!!!!!!!!!!!!!!!!!!
const ServiceController = require('./controllers/ServiceController');

const routes = express.Router();


//API-Status--------------------
routes.get('/', IntexController.show);

//Show--------------------------
routes.get('/services', ServiceController.show);
routes.get('/showbudgets', BudgetControlle.show);


//Store--------------------------
routes.post('/sessions', SessionController.store);
routes.post('/logon', LogonController.logon);
routes.post('/newbudget', BudgetControlle.store);
routes.post('/newservice', ServiceController.store);

//Update--------------------------

//Delete--------------------------
routes.delete('/deletebudget/:budget_id', BudgetControlle.delete);



module.exports = routes;