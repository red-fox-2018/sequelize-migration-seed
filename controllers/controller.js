const View = require('../views/view')
const db = require('../models/index')

class Controller {

    static showContact(){
      db.Contact.findAll({
          raw:true
      })
      .then(contacts =>{
        View.print(contacts)
        process.exit()
      })
      .catch(err =>{
        View.print(err)
      })
    }

    static createContact(name, email, phone){
        db.Contact.create({
            name: name,
            email: email,
            phone: phone
        })
        .then(contact =>{
            View.print('create contact success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static updateContact(id, column, value){
        let data;
        switch (column) {
            case 'name':
                data = {name: value}
                break;
            case 'email':
                data = {email: value}
                break;
            case 'phone':
                data = {phone: phone}
                break;
        }

        db.Contact.update(data, {
            where: {id: id}
        })
        .then(contact =>{
            View.print('update contact success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static deleteContact(id){
        db.Contact.destroy({
            where: {id: id}
        })
        .then(contact =>{
            View.print(`delete contact success`);
            process.exit();
        })
        .catch(err =>{
            View.print(err);
        })
    }

    static showAddress(){
        db.Address.findAll({
            raw:true
        })
        .then(address =>{
          View.print(address)
        })
        .catch(err =>{
          View.print(err)
        })
      }

      static createAddress(street, city, zip_code){
        db.Address.create({
            street: street,
            city: city,
            zip_code: zip_code
        })
        .then(address =>{
            View.print('create address success')
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static updateAddress(id, column, value){
        let data;
        switch (column) {
            case 'street':
                data = {street: value}
                break;
            case 'city':
                data = {city: value}
                break;
            case 'zip_code':
                data = {zip_code: phone}
                break;
        }

        db.Address.update(data, {
            where: {id: id}
        })
        .then(address =>{
            View.print('update address success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static deleteAddress(id){
        db.Address.destroy({
            where: {id: id}
        })
        .then(address =>{
            View.print(`delete address success`);
            process.exit();
        })
        .catch(err =>{
            View.print(err);
        })
    }

}

module.exports = Controller