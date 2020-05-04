const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();

let PORT = 3333;

mongoose.connect('mongodb+srv://admin:Sem_senha1@s-i-m-w9uzj.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.PORT || PORT, () => {
  console.log('Server is running on PORT:', PORT);
});