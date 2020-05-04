const SubService = require('../models/SubService');


module.exports = {

  async show(req, res) {

    const { tags, service_id } = req.headers;

    const showSubs = await SubService.find({ service: service_id }).where({ tags });

    return res.status(200).json(showSubs);
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


    const newSub = await SubService.create({
      description,
      priceWithCable,
      priceWithOutCable,
      priceAboveThreeWithCable,
      priceAboveThreeWithOutCable,
      service: service_id,
      tags: tags.split(',').map(tag => tag.trim()),
    })

    return res.status(200).json(newSub);
  }
}