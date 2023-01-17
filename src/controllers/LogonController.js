const User = require('../models/User');

module.exports = {

  async logon(req, res) {
    const { email, password } = req.body;

    let user = await User.findOne({ email }).select("+password");

    if (!user || null || '') {
      user = {
        message: 'Usuario não encontrado!',
      }

    } else if (user.password != password || null || '') {
      user = {
        message: 'Senha incorreta',
      }
    }
    //Apenas troca o password por uma hash aleatória sem sentido
    function fog() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
      for (var i = 0; i < 25; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }

    user.password = await fog();

    res.status(200).json(user);
  },

}
