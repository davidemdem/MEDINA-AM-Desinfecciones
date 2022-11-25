const express=require('express');
const { renderLoginView, login, renderHomeView, logout, renderRegister, registrar, renderRegisterBdD } = require('../controllers/user');
const { validateSession, validateNoSession, validateRegister } = require('../middlewares/user');

const router=express.Router();

router.get('/login',renderLoginView);
router.post('/login',login);
router.get('/logout',logout);

router.get('/home',validateSession,renderHomeView);


router.get('/registrar',registrar)
router.post('/registrarr',validateRegister,renderRegister,renderHomeView);

router.post('/registrar',renderRegisterBdD,renderHomeView)

    



module.exports=router;
