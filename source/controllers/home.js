
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


module.exports = {
    renderHomeView,
    renderLoginView,
    renderDetailServiceView,
    renderServicesSelected
};