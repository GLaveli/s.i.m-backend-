const Services = require('../models/Servises');

module.exports = {
  async show(req, res) {

    const { name } = req.headers;

    console.log(name);


    const services = await Services.find({ name: name })

    return res.json(services);
  }
}