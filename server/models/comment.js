'use strict';
module.exports = function(sequelize, DataTypes) {
  var comment = sequelize.define('Comment', {
    content: DataTypes.STRING,
    userid: DataTypes.INTEGER,
    postid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return comment;
};
