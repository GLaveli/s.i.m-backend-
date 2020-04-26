const services = require('../models/Servises');

module.exports = {

  store(req, res) {

    let { user } = req.headers

    console.log(req.body);
    console.log('User: ' + user);




    res.send({
      message: 'ok'
    });
  }
};