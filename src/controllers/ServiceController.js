const Service = require('../models/Service');

module.exports = {

  async show(req, res) {
    const services = await Service.find();

    res.status(200).json(services);
  },

  async store(req, res) {
    let newData = new Date;
    let data = (newData.getDate() + "/" + (newData.getMonth() + 1) + "/" + newData.getFullYear());

    const { description } = req.body;
    const { user_id } = req.headers;

    const service = await Service.create({
      data,
      description,
      user: user_id
    });
    return res.json(service);
  }
};