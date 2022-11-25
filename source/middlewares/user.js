//funcion que va a validar la sesion 
const { body, validationResult } = require('express-validator');

const validateSession = (req, res, next) => {
    //console.log(req.session)
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
const validateRegister=(req,res, next)=> {
    body('BusinessName', 'Ingrese el Nombre de Su Negocio')
        .exists()
        .isLength({ min: 4 }),
    body('Email', 'Ingrese un Email valido')
        .exists()
        .isEmail(),
    body('username', 'Ingrese su nombre y apellido')
        .exists()
        .isLength({ min: 8 }),
        (req, res) => {
            console.log(req.body)
        const errors = validationResult(req);
        if(!errors.isEmpty()) {  //si los errores no estan vacios
             res.status(400).json({errors:errors.array()})
             console.log(errors)
            }
        }
        next();
}




module.exports = {
    validateSession,
    validateNoSession,
    validateRegister
}