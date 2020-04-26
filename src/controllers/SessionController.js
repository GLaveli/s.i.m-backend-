const User = require('../models/User');

module.exports = {

  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = { code: 404, message: "User not found" };
      //user = await User.create({ email });
    }

    res.json(user);
  }
};