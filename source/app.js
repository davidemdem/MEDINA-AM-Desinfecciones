const path= require('path');

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('ESTOY EN HOME')}
)
app.get('/detalles',(req,res)=>{
    res.send('estoy en los productos detallados')
})
app.get('/login',(req,res)=>{
    res.send('estoy en el inicio de sesion')
})
app.get('/carrito',(req,res)=>{
    res.send('estoy en el carrito')
})
app.listen(3000,()=>console.log('Servidor iniciado en elpuerto 3000'))