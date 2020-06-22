const Service = require('../models/Service');

module.exports = {
  async show(req, res) {
    let showServices = [];
    let { tags } = req.headers;

    if (!tags) {
      showServices = await Service.find();
    } else {
      showServices = await Service.find().where({ tags });
    }

    return res.status(200).json(showServices);
  },

  async store(req, res) {
    const { service_id } = req.headers;
    const {
      description,
      priceWithCable,
      priceWithOutCable,
      priceAboveThreeWithCable,
      priceAboveThreeWithOutCable,
      tags } = req.body;


    const newServices = await Service.create({
      description,
      priceWithCable,
      priceWithOutCable,
      priceAboveThreeWithCable,
      priceAboveThreeWithOutCable,
      service: service_id,
      tags: tags.split(',').map(tag => tag.trim()),
    })

    return res.status(200).json(newServices);
  }
}