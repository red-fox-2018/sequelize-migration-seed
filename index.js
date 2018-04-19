const fs = require('fs')

fs.readFile('./contacts.csv','utf8',(err,data)=>{
    let contact = data.split('\n')
    // console.log(contact)
    let header = ['name', 'email', 'phone']
    for(let i=0; i<contact.length; i++){
        // console.log(contact[i].split(','))
        let obj = {}
        let row = contact[i].split(',')
        for(let j=1; j<row.length; j++){
            console.log('>>>>>>',row[j])
        }
    }
})


