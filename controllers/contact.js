/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/


const Model = require('../models');
const View = require('../views/contact.js');

class ContactController {

   static list() {
      Model.Contact.findAll({
            raw: true
         })
         .then(row => View.display(row))
         .catch(err => {
            console.log(err);
         });
   }

   static add(name, email, phone) {
      Model.Contact.create({
            name: name,
            email: email,
            phone: phone
         }).then(() => Model.Contact.findAll({
            raw: true
         }))
         .then(row => View.display(row))
         .catch(err => {
            console.log(err);
         });
   }

   static update(id, column, value) {
      Model.Contact.update({
            [column]: value
         }, {
            where: {
               id: id
            }
         }).then(() => Model.Contact.findAll({
            raw: true
         }))
         .then(row => {
            View.display(row);
         })
         .catch(err => {
            console.log(err);
         });
   }

   static delete(id) {
      Model.Contact.destroy({
            where: {
               id: id
            }
         })
         .then(() => {
            Model.Contact.findAll({
                  raw: true
               })
               .then(row => {
                  View.display(row);
               });
         });
   }
}
module.exports = ContactController;
