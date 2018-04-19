/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

const argv = process.argv;

const Contact = require('./controllers/contact.js');
const Address = require('./controllers/address.js');

let type = argv[2].split(':')[0];
let command = argv[2].split(':')[1];
let options = argv.splice(3);

if (type == 'contact') {
   switch (command) {
      case 'list':
         Contact.list();
         break;
      case 'add':
         Contact.add(options[0], options[1], options[2]);
         break;
      case 'update':
         Contact.update(options[0], options[1], options[2]);
         break;
      case 'delete':
         Contact.delete(options[0]);
         break;
   }
} else if (type == 'address') {
   switch (command) {
      case 'list':
         Address.list();
         break;
      case 'add':
         Address.add(options[0], options[1], options[2]);
         break;
      case 'update':
         Address.update(options[0], options[1], options[2]);
         break;
      case 'delete':
         Address.delete(options[0]);
         break;
   }
}
