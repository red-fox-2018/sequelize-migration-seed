"use strict"
const Contact = require('./controllers/contact');
const Address = require('./controllers/address');
const commands = process.argv;
let value = commands.slice(5).join(' ');

switch (commands[2]) {
  case 'contact:list':
    Contact.showListContact();
    break;
  case 'contact:add':
    Contact.addContact(commands[3], commands[4], value);
    break;
  case 'contact:update':
    Contact.updateContact(commands[3], commands[4], value);
    break;
  case 'contact:delete':
    Contact.deleteContact(commands[3]);
    break;
  case 'address:list':
    Address.showListAddress();
    break;
  case 'address:add':
    Address.addAddress(commands[3], commands[4], value);
    break;
  case 'address:update':
    Address.updateAddress(commands[3], commands[4], value);
    break;
  case 'address:delete':
    Address.deleteAddress(commands[3]);
    break;
}