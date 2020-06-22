const User = require('../models/User');

module.exports = {

  async logon(req, res) {
    const { email, password } = req.body;

    //console.log(email, password);

    let user = await User.findOne({ email });

    if (!user || null || '') {
      user = {
        message: 'Usuario não encontrado',
      }

    } else if (user.password != password || null || '') {
      user = {
        message: 'Senha incorreta',
      }
    };


    res.status(200).json(user);
  }
}