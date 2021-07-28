const db = require('../src/database/models');
const sequelize = db.sequelize;
const Users = db.User;

async function userLoggedMiddleware(req, res, next) {
    // asigno false a la variable local isLogged 
    res.locals.isLogged = false;

    // en caso que exista un usuario logueado Y haya elegido tachar "recordar usuario" al login
    if (req.cookies.userEmail) {

        // almaceno email asignado a la cookie en la variable emailInCookie
        let emailInCookie = req.cookies.userEmail;

        // busco usuario en DB correspondiente al email anterior
        let userFromCookie = await Users.findOne({where: {email: emailInCookie}});

        // si existe el usuario se genera una instancia de session con el usuario
        if (userFromCookie) {
            req.session.userlogged = userFromCookie;
        }
    }
    // si existe instancia de session, y usuario asignado a la misma la variable local isLogged pasa a true,
    // y se almacena el usuario en variable local userLogged
    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;