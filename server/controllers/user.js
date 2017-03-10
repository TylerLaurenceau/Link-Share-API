const User = require("../models").User;
const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs')

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
  }
};
