const Post = require("../models").Post;
const User = require("../models").User;
const Comment = require("../models").Comment;

module.exports = {
  create (req, res) {
    Post.create({
      title: req.body.title,
      link: req.body.link,
      userid: req.params.userid
    })
      .then(post => res.status(201).send(post))
      .catch(error => res.status(400).send(error));
  },

  findAll (req, res) {
    Post.findAll()
    .then(post => res.status(200).send(post))
    .catch(error => res.status(400).send(error));
  },

  delete(req, res) {
    Post.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(post => res.status(200).send(post))
  .catch(error => res.status(400).send(error));
  }
};
