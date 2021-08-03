const db = require('../../src/database/models');
const sequelize = db.sequelize;

const Users = db.User;
const Avatars = db.Avatar;
const Addresses = db.Address;
const Roles = db.Role;

let usersAPIController = {
// List busca todos los usuarios
    list: async (req, res) => {
        try {
            let userList = await Users.findAll();

            // Elimino password de cada objeto del array
            let userArray = userList.map((user) => { 
                delete user.dataValues.password;
                delete user.dataValues.createdAt;
                delete user.dataValues.updatedAt;
                delete user.dataValues.addressId;
                delete user.dataValues.avatarId;
                delete user.dataValues.roleId;
                user.dataValues.detail = `api/users/${user.dataValues.id}`
                return user;});

            // Armo respuesta con resultado de findAll en formato JSON
            let respuesta = {
                meta: {
                    status : 200,
                    count: userList.length,
                    url: 'api/users'
                },
                data: userArray
            }

            // Envio respuesta en formato JSON
            res.json(respuesta);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },
    detail: async (req, res) => {
        try {
            // Busco user en DB
            let user = await Users.findOne(
                {where: {id : req.params.id}, 
                include: ["avatar", "address"]}
            )
            // Almaceno url de img en variable
            let avatarUrl = req.headers.host + `/images/users/${user.dataValues.avatar.name}`;
            
            // Inserto url de imagen en product
            user.dataValues.avatarURL = avatarUrl;

            // Armo respuesta con resultado de findOne en formato JSON
            let respuesta = {
                meta: {
                    status : 200,
                    url: `api/users/${user.id}`
                },
                data: user
            }
            delete respuesta.data.dataValues.password;
            delete respuesta.data.dataValues.createdAt;
            delete respuesta.data.dataValues.updatedAt;
            delete respuesta.data.dataValues.addressId;
            delete respuesta.data.dataValues.avatarId;
            delete respuesta.data.dataValues.roleId;

            res.json(respuesta);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    }
}

module.exports = usersAPIController;