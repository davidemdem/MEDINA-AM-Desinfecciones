const express=require('express');
const { renderLoginView, login, renderHomeView } = require('../controllers/user');
const router=express.Router();

router.get('/login',renderLoginView);
router.post('/login',login);

router.get('/home',renderHomeView);

module.exports=router;
