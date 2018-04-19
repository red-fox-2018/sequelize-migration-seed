'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Format email is not valid'
        }
      }
    },
    phone: DataTypes.STRING
  }, {});
  Contact.associate = function (models) {
    // associations can be defined here
  };
  return Contact;
};