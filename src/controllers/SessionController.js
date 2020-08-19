const User = require('../models/User');

module.exports = {

  async show(req, res) {

    let email = "g.laveli.p@gmail.com"
    let user
    try {
      user = await User.findOne({ email });
    } catch (err) {
      res.status(401).json({ message: err, code: 0 });
    }
    res.status(200).json(user);
  },

  async store(req, res) {
    const { name, cpf, email, password, tell1, tell2, street, number, city, uf } = req.body;
    try {
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
        user = {
          email: user.email,
          message: "Email ja cadastrado!",
          code: 0
        }
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(401).json({ message: err, code: 0 });
    }
  }

};