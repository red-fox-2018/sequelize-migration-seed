'use strict';
module.exports = (sequelize, DataTypes) => {
  var Address = sequelize.define('Address', {
    id: DataTypes.INTEGER,
    street: DataTypes.STRING,
    city: DataTypes.INTEGER,
    zip_code: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};