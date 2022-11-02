
const express = require('express');

const { renderHomeView,
    renderLoginView,
    renderDetailServiceView,
    renderServicesSelected } = require('../controllers/home');

const router = express.Router(); //solo necesitamos el modulo de rutas de express//

router.get('/home', renderHomeView);
router.get('/login', renderLoginView);
router.get('/servicios', renderDetailServiceView);
router.get('/carrito', renderServicesSelected);

app.use(require('./routes/home'))
app.use(express.json()) //poder utilizar datos json

const author=require("../../models").authors

module.exports = router;
