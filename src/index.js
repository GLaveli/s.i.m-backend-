const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
//-----------Let`s Code!-------------------

app.use(routes);

app.listen(3333);