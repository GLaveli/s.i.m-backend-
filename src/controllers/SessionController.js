const User = require('../models/User');

module.exports = {

  async store(req, res) {
    const { name, cpf, email, password, tell1, tell2, street, number, city, uf } = req.body;

    try {
      const user = await User.findOne({ email });

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
    } catch (err) {
      res.status(401).json({ message: err, code: 0 });
    }
  }
};