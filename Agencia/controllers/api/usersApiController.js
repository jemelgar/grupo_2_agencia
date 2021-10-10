const db = require('../../database/models');

const usersApiController = {
    list: (req, res) => {
        db.Usuario.findAll({
            include: ['tipoUsuario'],
        })   .then(users =>{
            let datos = {
                meta: {
                    status: 200,
                    total: users.length,
                    url: "/usuariosApi"
                },
                data: users.map(user => {
                    return{
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        detail: "/usuariosApi/" + user.id
                    }
                })
            }
            res.json(datos)
        })
    },
// Detalle de usuario por id
detail: (req, res) => {
    db.Usuario.findByPk(req.params.id, {
        include: ['tipoUsuario'],
    }) .then(user=>{
        let data = {
            meta:{
                status: 200,
                total: user.id.length,
                url: "/usuariosApi/" + user.id
            },
            data: {
                    id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: user.email,
                    image: "/img/usersImages/" + user.image,
                }
        }
        res.json(data)
    })
},
};
module.exports = usersApiController;
