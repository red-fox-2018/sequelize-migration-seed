const Model = require('../models')
const View = require('../view/view')

class Contact {

    static create(name,email,phone){
        Model.Contact.create({
            name:name,
            email:email,
            phone:phone
        })
        .then(resolveAdd => {
            View.display(`Add ${name} success`)
        })
        .catch(errAdd => {
            View.display(errContact)
        })

    }

    static update(idUser,column,value) {
        Model.Contact.update({
            [column]:value
        },{
            where:{id:idUser}
        })
        .then(resolveUpdate =>{
            View.display(`Update ${name} with ID ${id} success`)
        })
        .catch(rejectUpdate =>{
            View.display(rejectUpdate)
        })

        process.exit()
    }

    static delete(id){

        Model.Contact.destroy({where: {id:id}})
        .then(resolveDelete => {
            View.display(`Delete Success`)
        })
        .catch(rejectDelete => {
            View.display(rejectDelete)
        })

    }

    static findAll(){
        // console.log('testttt')
        Model.Contact.findAll({raw:true})
        .then(resolveFind => {
            View.display(resolveFind)
        })
        .catch(rejectFind => {
            View.display(rejectFind)
        })

    }
}

module.exports = Contact