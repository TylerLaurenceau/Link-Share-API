const Comment = require("../models").Comment;
const Post = require("../models").Post;
const User = require("../models").User;

module.exports = {
  create (req, res) {
    Comment.create({
      content: req.body.content,
      userid: req.params.userid,
      postid: req.params.postid
    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },
}
