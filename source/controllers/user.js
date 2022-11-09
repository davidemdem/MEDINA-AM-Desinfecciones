const bcrypt=require('bcrypt');

const users=require('../models/user');
const session = require('express-session');



/*/ renderizar la vista para cargar un producto//
const renderHomeView = (req, res) => {
    return res.render('home.ejs');
}
*/
const renderLoginView = (req, res) => {

    return res.render('login.ejs')
}
const renderDetailServiceView = (req, res) => {
    return res.render('servicios.ejs')
}
const renderServicesSelected = (req, res) => {
    return res.render('carrito.ejs')
}  

const login=(req,res)=>{ 
    const { usernameOrEmail, password } = req.body;
    const user=users.filter (u => u.email===usernameOrEmail || u.username===usernameOrEmail)
    if(user.length == 0){
        return res.send('Usuario o contraseña incorrecta');
    }
    const userData=user[0]
    
    const isValidPassword = bcrypt.compareSync(password, userData.password);

    if(!isValidPassword){
        return res.send("Usuario o contraseña incorrecto");
    }
    
    delete userData.password;//eliminamos la contraseña de los datos del usuario
    
    req.session.userData=userData; //creamos la sesion con los datos del usuario
    
    return res.redirect('/home')

    
    res.status(200).json(req.body)
  }   
const renderHomeView=(req, res) =>{
    return res.render('home.ejs')
}
const logout=(req, res) =>{
    req.session.destroy();
    return res.redirect('login');
}


module.exports = {
    renderHomeView,
    renderLoginView,
    renderDetailServiceView,
    renderServicesSelected,
    login,logout
};