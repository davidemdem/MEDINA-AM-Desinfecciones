
const express=require('express');
const { renderUploadProductView } = require('../controllers/home');
const router=express.Router(); //solo necesitamos el modulo de rutas de express//

router.get('/home',renderUploadProductView);



module.exports=router;
