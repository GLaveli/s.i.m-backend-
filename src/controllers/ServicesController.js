
const Services = require('../models/Servises');

module.exports = {

  async show(req, res) {

    const { name } = req.query;
    console.log(name.toLocaleLowerCase());

    const serviceList = await Services.find({ name })

    return res.json(serviceList);
  },

  async store(req, res) {

    const { user_id } = req.headers
    const { name, amount, description, discount } = req.body;

    let discountedAmount = (amount * (discount / 100));

    const services = await Services.create({
      user: user_id,
      name: name.toLocaleLowerCase(),
      amount,
      discount,
      discountedAmount,
      totalAmount: amount - discountedAmount,
      description,
    });

    res.send(services);
  }
};