// Require any middleware here.


// Require your controllers here
const UserController = require("../controllers/user");
const PostController = require("../controllers/post");



module.exports = (app) => {
  // Add your routes here

  app.post('/user/register', UserController.register);
  app.get('/user', UserController.findAll);
  app.delete('/:id/user', UserController.delete);


  app.post('/:userid/newPost', PostController.create);
  app.get('/post', PostController.findAll);
  app.delete('/:id/post', PostController.delete);
};
