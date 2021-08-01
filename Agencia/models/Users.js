const fs = require('fs' );
const { all } = require('../routes/admin');


const User = {
    fileName: './database/db-user-ignored.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1; 
        }  
        return 1; 
    },

    findAll: function(){ 
        return this.getData();
    },

    // Buscar usuario por su ID 
    findByPk: function(id){ 
        let allUsers = this.findAll();
        let userfound = allUsers.find(oneUser => oneUser.id === id);
        return userfound
    },

    // Buscar por cualquier campo
    findByField: function(field, text){ 
        let allUsers = this.findAll();
        let userfound = allUsers.find(oneUser => oneUser[field] === text);
        return userfound
    },
    // Guardar usuario en el JSON
    create: function (userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, 2));
        return true
    },
    // Borrar usuario en el JSON
    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, 2));
        return true
    }
}

module.exports = User;