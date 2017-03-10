// Require any middleware here.


// Require your controllers here
const UserController = require("../controllers/user");


module.exports = (app) => {
  // Add your routes here
  app.post('/user/register', UserController.register);
};
