const command = process.argv.slice(2)
const Controller = require('./controllers/controller')

switch (command[0]) {
    case 'show':
        if(command[1] == 'contact'){
            Controller.showContact()
        } else {
            Controller.showAddress()
        }
        break;
    
    case 'create':
        if(command[1] == 'contact'){
            Controller.createContact(command[2], command[3], command[4])
        } else {
            Controller.createAddress(command[2], command[3], command[4])
        }
        break;

    case 'update':
        if(command[1] == 'contact'){
            Controller.updateContact(command[2], command[3], command[4])
        } else {
            Controller.updateAddress(command[2], command[3], command[4])
        }
        break;

    case 'delete':
        if(command[1] == 'contact'){
            Controller.deleteContact(command[2])
        } else {

        }
        break;

}
