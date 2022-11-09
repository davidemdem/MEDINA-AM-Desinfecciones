//funcion que va a validar la sesion 


const validateSession = (req, res, next) => {
    if (!req.session.userData) {               //si no hay una session iniciada
        return res.redirect('/login');        //retornar al login
    }
    next();
}

const validateNoSession = (req, res, next) => {
    if (req.session.userData) {               //si hay una session iniciada
        return res.redirect('/home');        //retornar al home
    }
    next();
}


module.exports = {
    validateSession,
    validateNoSession
}