const users=require('../models/user');
// renderizar la vista para cargar un producto//
const renderHomeView = (req, res) => {
    return res.render('home.ejs');
}

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
    const{usernameOrEmail, password} = req.body;
    const user=users.filter (u=>u.email===usernameOrEmail || u.username===usernameOrEmail)
    if(user.length=0){
        return res.send('Usuario o contraseña incorrecta');

    }
     
}

module.exports = {
    renderHomeView,
    renderLoginView,
    renderDetailServiceView,
    renderServicesSelected,
    login
};