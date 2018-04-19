"use strict"
const Model = require('../models');
const View = require('../views/view');

class Controller {
  static showListAddress() {
    Model.Address.findAll({
        raw: true
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static addAddress(city, zip_code, street) {
    Model.Address.create({
        street: street,
        city: city,
        zip_code: zip_code
      }, {
        raw: true
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static updateAddress(id, column, value) {
    let objUpdate;
    switch (column) {
      case 'street':
        objUpdate = {
          street: value
        };
        break;
      case 'city':
        objUpdate = {
          city: value
        };
        break;
      case 'zip_code':
        objUpdate = {
          zip_code: value
        };
        break;
      default:
        break;
    }
    
    Model.Address.update(objUpdate, {
        where: {
          id: id
        }
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static deleteAddress(id) {
    Model.Address.destroy({
      where: {
        id: id
      }
    })
    .then(data => {
      View.showData(data);
    })
    .catch(err => {
      View.showErrorMessage(err);
    })
  }
}

module.exports = Controller;