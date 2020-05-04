const User = require('../models/User');

module.exports = {


  async show(req, res) {

    const users = await User.find();

    return res.status(200).json(users);
  },


  async store(req, res) {
    const { name, email, password, cpf } = req.body;

    let user = await User.findOne({ email });


    if (!user) {
      console.log("!User");

      user = await User.create({
        name,
        email,
        password,
        cpf
      });
    } else {
      user = { Message: "Email ja cadastrado!" }
    }

    res.status(200).json(user);
  }
};