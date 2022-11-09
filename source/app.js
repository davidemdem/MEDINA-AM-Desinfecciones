const path = require('path');

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookie = require('cookie-parser');
const { body, validationResult } = require('express-validator');


//const router = require('/routes/home');//

const app = express();

app.use(express.static(path.join(__dirname, "public")))
console.log(path.join(__dirname, "public"))

app.use(session({
    secret: '123456789',
    cookie: {
        expires: false
    },
    saveUninitialized: true,
    resave: false

}))
app.use(cookie());
app.use(bodyParser.urlencoded({ extended: false }))



//seteamos ejs como motor de plantillas//
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//console.log('views', __dirname + '/views')

app.use(require('./routes/user'));
app.use(require('./routes/helpers'));


app.get('/', (req, res) => {
    res.send('ESTOY EN HOME')
}
)
app.get('/detalles', (req, res) => {
    res.render('servicios.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.get('/carrito', (req, res) => {
    res.render('carrito.ejs')
})

app.post('/registrar',
    [body('BusinessName', 'Ingrese el Nombre de Su Negocio')
        .exists()
        .isLength({ min: 4 }),
    body('Email', 'Ingrese un Email valido')
        .exists()
        .isEmail(),
    body('username', 'Ingrese su nombre y apellido')
        .exists()
        .isLength({ min: 8 })] ,
        (req, res) => {
            console.log(req.body)
        const errors = validationResult(req);
        if(!errors.isEmpty()) {  //si los errores no estan vacios
             res.status(400).json({errors:errors.array()})
             console.log(errors)
            }
        });





app.listen(3000, () => console.log('Servidor iniciado en elpuerto 3000'))