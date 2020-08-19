const User = require('../models/User');
const Budget = require('../models/Budget');
const Service = require('../models/Service');

module.exports = {

 async basic(req, res) {
  let { user_id, email } = req.headers;

  let response = {};
  let responseUser = [];
  let responseBudget = [];
  let responseService = [];

  let user = await User.findOne({ email });
  if (user === null || user === [] || user === undefined)
   return;

  if (user._id == user_id && Number(user.flag) == 1) {
   responseUser = await User.find();
   responseBudget = await Budget.find();
   responseService = await Service.find();
  } else {
   response = {
    message: "Você não tem permissão para isso",
    code: 0
   };
  }


  let countUser = 0;
  let countBudget = 0;
  let totalBudgetPrice = 0;
  let countService = 0;

  responseUser.forEach(element => {
   countUser++;
  });
  responseBudget.forEach(element => {
   totalBudgetPrice += element.price;
   countBudget++;
  });
  responseService.forEach(element => {
   countService++;
  });

  response.countUser = countUser;
  response.countBudget = countBudget;
  response.totalBudgetPrice = totalBudgetPrice;
  response.countService = countService;

  res.status(200).json(response);
 }
};