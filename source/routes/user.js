const express=require('express');
const { renderLoginView, login } = require('../controllers/user');
const router=express.Router();

router.get('/login',renderLoginView);
router.post('/login',login);
module.exports=router;
