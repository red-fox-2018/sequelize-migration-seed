const controller = require('./controller.js')

var argv = process.argv
switch (argv[2]) {
  case 'contacts:list':
    controller.showContact()
    break;
  case 'contacts:add':
    controller.addContact(argv[3],argv[4],argv[5]) // ==> name,email,phone => node app.js "contact:add" "Riley John" "riley@john.com" "879849387"
    break;
  case 'contacts:update':
    controller.updateContact(argv[3],[argv[4],argv[5]])
    break;
  case 'contacts:delete':
    controller.deleteContact(argv[3])
    break;
  case 'address:list':
    controller.showAddress()
    break;
  case 'address:add':
    controller.addAddress(argv[3],argv[4],argv[5])
    break;
  case 'address:update':
    controller.updateAddress(argv[3],[argv[4],argv[5]])
    break;
  case 'address:delete':
    controller.deleteAddress(argv[3])
    break;
}
