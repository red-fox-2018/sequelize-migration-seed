const { Contact, Address } = require('./controller')
const cmd = process.argv

if(cmd[2] == 'contact'){
    switch (cmd[3]) {
        case 'add':
            Contact.create(cmd[4],cmd[5],cmd[6])
            break;
        case 'update':
            Contact.update(cmd[4],cmd[5],cmd[6])
            break;
        case 'delete':
            Contact.delete(cmd[4])
            break;
        case 'show':
            Contact.findAll()
            break;
        default:
            break;
    }
}

// Contact.test()