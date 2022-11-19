const express=require('express');
const { renderLoginView, login, renderHomeView, logout, renderRegister, welcomeNewUser, registrar } = require('../controllers/user');
const { validateSession, validateNoSession, validateRegister } = require('../middlewares/user');
const router=express.Router();

router.get('/login',validateNoSession,renderLoginView);
router.post('/login',login);
router.get('/logout',logout);

router.get('/home',validateSession,renderHomeView);

router.get('/registrar',registrar)
router.post('/registrar',renderRegister)


    



module.exports=router;
