
const express=require('express');
const { renderHomeView,renderLoginView, renderDetailServiceView} = require('../controllers/home');
const router=express.Router(); //solo necesitamos el modulo de rutas de express//

router.get('/home',renderHomeView);
router.get('/login',renderLoginView);
router.get('/services',renderDetailServiceView);

module.exports=router;
