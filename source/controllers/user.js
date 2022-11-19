const bcrypt = require('bcrypt');

const fs = require('fs');

let read = fs.readFileSync('user.json', 'utf-8');
let readUsers = JSON.parse(read);

const renderLoginView = (req, res) => {

    return res.render('home.ejs')
}
const renderDetailServiceView = (req, res) => {
    return res.render('servicios.ejs')
}
const renderServicesSelected = (req, res) => {
    return res.render('carrito.ejs')
}

const login = (req, res) => {

    const { usernameOrEmail, password } = req.body;
    const user = readUsers.filter(u => u.email === usernameOrEmail || u.username === usernameOrEmail)
    if (user.length == 0) {
        return res.send('Usuario o contraseña incorrecta');
    }
    const userData = user[0]

    const isValidPassword = bcrypt.compareSync(password, userData.password);

    if (!isValidPassword) {
        return res.send("Usuario o contraseña incorrecto");
    }

    delete userData.password;//eliminamos la contraseña de los datos del usuario

    req.session.userData = userData; //creamos la sesion con los datos del usuario

    return res.redirect('/home')


    res.status(200).json(req.body)
}
const renderHomeView = (req, res) => {
    return res.render('home.ejs')
}
const registrar = (req, res) => {
    return res.render('home.ejs')
}

const renderRegister = (req, res) => {
    const { username, email, password, name } = req.body
    const passwordHashed = bcrypt.hashSync(password, 10)//
    //const user=users.filter(u => u.username == BusinessName || u.password == password || u.email == email || u.username == username)

    let newUser = {
        id: readUsers.length + 1,
        username,
        email,
        password: passwordHashed,
        name,
    }
    readUsers.push(newUser);
    let userDataBase = JSON.stringify(readUsers);
    console.log('hola')
    fs.writeFileSync('user.json', userDataBase, 'utf-8',);
    res.redirect('home');

}


const logout = (req, res) => {
    req.session.destroy();
    return res.redirect('login');
}

module.exports = {
    renderHomeView,
    renderLoginView,
    renderDetailServiceView,
    renderServicesSelected,
    login, logout,
    registrar,
    renderRegister
};