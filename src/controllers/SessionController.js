const User = require('../models/User');

module.exports = {


  async show(req, res) {

    const users = await User.find();

    return res.status(200).json(users);
  },


  async store(req, res) {
    const { name, cpf, email, password, tell1, tell2, street, number, city, uf } = req.body;
    //console.log(name, cpf, email, password, tell1, tell2, street, number, city, uf);

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        cpf,
        email,
        password,
        tell1,
        tell2,
        street,
        number,
        city,
        uf
      });

    } else {
      console.log("Email ja registrado");

      user = {
        email: user.email,
        message: "Email ja cadastrado!",
        code: 0
      }
    }

    res.status(200).json(user);
  }
};