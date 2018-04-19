"use strict"
const Model = require('../models');
const View = require('../views/view');

class Controller {
  static showListContact() {
    Model.Contact.findAll({
        raw: true
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static addContact(email, phone, name) {
    Model.Contact.create({
        name: name,
        email: email,
        phone: phone
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

  static updateContact(id, column, value) {
    let objUpdate;
    switch (column) {
      case 'name':
        objUpdate = {
          name: value
        };
        break;
      case 'email':
        objUpdate = {
          email: value
        };
        break;
      case 'phone':
        objUpdate = {
          phone: value
        };
        break;
      default:
        break;
    }
    
    Model.Contact.update(objUpdate, {
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

  static deleteContact(id) {
    Model.Contact.destroy({
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