const mysql = require('mysql2')
const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'gnusmas',
    port:3306,
    database:'amdesinfecciones'
});
conexion.connect((err)=>{
    if(err){
    console.log('ha ocurrido un error'+ err)
} else {console.log('la base de datos se conecto')
}})
module.exports=conexion