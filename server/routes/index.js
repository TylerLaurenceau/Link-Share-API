// Require any middleware here.
const middleware = require("../middleware");

// Require your controllers here
const UserController = require("../controllers/user");
const PostController = require("../controllers/post");
const CommentController = require("../controllers/comment");



module.exports = (app) => {
  // Add your routes here

  app.post('/user/register', UserController.register);
  app.get('/user', UserController.findAll);
  app.delete('/:id/user', UserController.delete);


  app.post('/:userid/newPost', PostController.create);
  app.get('/post', PostController.findAll);
  app.delete('/:id/post', PostController.delete);


  app.post('/:userid/:postid/newComment', CommentController.create);
  app.get('/:id/comment', CommentController.find);
  app.delete('/:id/comment', CommentController.delete);
};
