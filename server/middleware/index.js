const jwt = require("jwt-simple");
const appSecrets = require("../config/secrets");
const User = require("../models").User;

module.exports = {
  authenticate (req, res, next) {
    var token = req.headers['access-token'] || req.query.access_token;

    if (!token) {
      res.status(401).send({
        message: "Must be authenticated to use this route."
      });
    }

    try {
      var decoded = jwt.decode(token, appSecrets.jwtSecret);
      var userId = decoded.id;


      User.findById(userId).then(user => {

        if (!user) {
          res.status(401).send({ message: "Error during authentication." });
        }

        req.user = user;
        next();
      });

    } catch (e) {
      console.log(e);
      res.status(401).send({ message: "Invalid token." });
    }

  }
};
