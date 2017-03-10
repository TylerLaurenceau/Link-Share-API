const User = require("../models").User;
const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs')
const Comment = require("../models").Comment;

module.exports = {
  register (req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hashedPass = bcrypt.hashSync(req.body.password, salt);
    User.create({
      username: req.body.username,
      password: hashedPass,
      salt: salt
    })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },


  findAll (req, res) {
    User.findAll()
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error));
  },


  delete(req, res) {
    User.destroy({
    where: {
      id:req.params.id
    }
  })
  .then(user => res.status(200).send(user))
  .catch(error => res.status(400).send(error));
  }
};
