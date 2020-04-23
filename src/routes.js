const express = require('express');

const routes = express.Router();


routes.get('/', (req, res) => {
  return res.json({
    item01: 'Hello',
    item02: 'World'
  });
});

module.exports = routes;