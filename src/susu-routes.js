const express = require('express');
const susuController = require('./controllers/susu');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const SusuRouter = express.Router();
SusuRouter.use(addModels);

///problem is that we need to figure out how to get the information from the routes, either from params or the body

SusuRouter.get('/susu/:id', susuController.show);
SusuRouter.get('/susus/:user_id', susuController.list);
SusuRouter.get('/susu', susuController.all)
SusuRouter.post('/susuform', susuController.add)
SusuRouter.patch('/susucheck', susuController.varify)

SusuRouter.post('/susu', susuController.create);
// http://127.0.0.1:3000/api/susu
// {
//     "name": "test", 
//     "password":"123",
//     "userId": "1",
//     "paymentAmount": "100",
//      "nextPayment": "6/16"
// }

SusuRouter.patch('/susu/:id', susuController.update);

// http://127.0.0.1:3000/api/susu/6
// {
//     "name": "rav", 
//     "password":"123",
//     "owner":"1",
//     "paymentAmount": "100",
//     "nextPayment": "6/16"
// }

// SusuRouter.patch('/usersSusu/:user_id', susuController.payment)

SusuRouter.delete('/susu/:id', susuController.destroy)

// http://127.0.0.1:3000/api/susu/6

// {
//     "name": "rav", 
//     "password":"123",
//     "owner":"1",
//     "paymentAmount": "100",
//     "nextPayment": "6/16"
// }

module.exports = SusuRouter;
