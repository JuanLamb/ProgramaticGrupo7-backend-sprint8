

function loginMiddleware(req, res, next){        
    if (!req.body.email && !req.body.password) {
            return res.render('user/login', {
                errors: {
                    email: {
                        msg: 'Debes completar los campos'
                    },
                    password: {
                        msg: 'Debes completar los campos'
                    }
                }
            })            
        }

        next();
    };

    module.exports = loginMiddleware;