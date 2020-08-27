const Service = require('../models/Service');
const User = require('../models/User');

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

    const { user_id } = req.headers;

    const {
      description,
      priceWithCable,
      priceWithOutCable,
      priceAboveThreeWithCable,
      priceAboveThreeWithOutCable,
      tags } = req.body;

    let user = await User.findOne({ _id: user_id });

    console.log(flag);

    console.log(user);


    /*
        const newServices = await Service.create({
          description,
          priceWithCable,
          priceWithOutCable,
          priceAboveThreeWithCable,
          priceAboveThreeWithOutCable,
          tags: tags.split(',').map(tag => tag.trim()),
        })
        */

    return res.status(200).json("ok!");
  },

  async delete(req, res) { }
}