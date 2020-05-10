const Budget = require('../models/Budget');

module.exports = {

  async show(req, res) {

    const { user_id } = req.headers;

    const budgets = await Budget.find().where({ user: user_id });

    return res.status(200).json(budgets);
  },


  async store(req, res) {
    const { title, description, price } = req.body;
    const { user_id } = req.headers;

    if (!user_id) {
      res.status(200).json({ message: "Token invalido" });
    } else {
      try {
        const budget = await Budget.create({
          title,
          description,
          price,
          user: user_id
        });
        res.status(200).json({ message: "ok" });
      } catch (err) {
        res.status(401).json({ message: err, code: 0 });
      }
    }
  },


  async delete(req, res) {
    let response = {}
    const { user_id } = req.headers;
    const { budget_id } = req.params;

    let budget = await Budget.findOne({ _id: budget_id });

    if (budget.user == user_id) {
      const showSubs = await Budget.deleteOne().where({ _id: budget_id });
      response = {
        message: "Orçamento removido com sucesso!"
      }
    } else {
      response = {
        message: "Você não tem permissão para isso"
      }
    }


    return res.status(200).json(response);
  },
};