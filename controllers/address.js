/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

const Model = require('../models');
const View = require('../views/address.js');

class AddressController {

   static list() {
      Model.Address.findAll({
            raw: true
         })
         .then(row => View.display(row))
         .catch(err => {
            console.log(err);
         });
   }

   static add(street, city, zip_code) {
      Model.Address.create({
            street: street,
            city: city,
            zip_code: zip_code
         }).then(() => Model.Address.findAll({
            raw: true
         }))
         .then(row => View.display(row))
         .catch(err => {
            console.log(err);
         });
   }

   static update(id, column, value) {
      Model.Address.update({
            [column]: value
         }, {
            where: {
               id: id
            }
         }).then(() => Model.Address.findAll({
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
      Model.Address.destroy({
            where: {
               id: id
            }
         })
         .then(() => {
            Model.Address.findAll({
                  raw: true
               })
               .then(row => {
                  View.display(row);
               });
         });
   }
}
module.exports = AddressController;
