const path= require('path');

const express=require('express');
const app=express();

//seteamos ejs como motor de plantillas//
app.set('view engine','ejs');
app.set('views',__dirname +'/views');


app.get('/',(req,res)=>{
    res.send('ESTOY EN HOME')}
)
app.get('/detalles',(req,res)=>{
    res.render('servicios.ejs')
})
app.get('/login',(req,res)=>{
   res.render('login.ejs')
})
app.get('/carrito',(req,res)=>{
    res.render('carrito.ejs')
})


app.use(require('./routes/home'))


app.listen(3000,()=>console.log('Servidor iniciado en elpuerto 3000'))