const Budget = require('../models/Budget');

module.exports = {

  async show(req, res) {
    let budgets;

    const { user_id } = req.headers;

    if (!user_id) {
      budgets = []
    } else {
      budgets = await Budget.find().sort({ createdAt: -1 }).where({ user: user_id }).populate('user');
    };
    return res.status(200).json(budgets);
  },

  async store(req, res) {
    const { title, description, totalValue, selectedItens, dataSave, selectedItensObjct } = req.body;
    const { user_id } = req.headers;

    console.log(req.body);

    if (!user_id) {
      res.status(200).json(
        {
          message: "Você não tem permissão para isso",
          code: 0,
        });
    } else {
      try {
        const budget = await Budget.create({
          title,
          description,
          price: totalValue,
          selected_itens: selectedItens,
          user: user_id,
          dataSave: dataSave,
          selectedItensObjct: selectedItensObjct,
        });

        res.json(budget);
      } catch (err) {
        res.status(401).json(
          {
            message: err, code: 0,
          }
        );
      };
    };
  },
  async delete(req, res) {
    let response = {}
    const { user_id } = req.headers;
    const { budget_id } = req.params;

    let budget = await Budget.findOne({ _id: budget_id });

    if (budget.user == user_id) {
      const showSubs = await Budget.deleteOne().where({ _id: budget_id });
      response = {
        message: "Orçamento removido com sucesso!",
        cod: 1
      };
    } else {
      response = {
        message: "Você não tem permissão para isso",
        code: 0
      };
    };
    return res.status(200).json(response);
  },
};