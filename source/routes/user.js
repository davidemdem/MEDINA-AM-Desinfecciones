const express=require('express');
const { renderLoginView, login, renderHomeView, logout, renderRegister, registrar, renderRegisterBdD, renderCarrito } = require('../controllers/user');
const { validateSession, validateNoSession, validateRegister } = require('../middlewares/user');
const router=express.Router();
const conexion=require('../../config/conexion')

router.get('/login',renderLoginView);
router.post('/login',login);
router.get('/logout',logout);



router.post('/servicios',renderCarrito)
router.get('/home',validateSession,renderHomeView);


router.get('/registrar',registrar)
router.post('/registrarr',validateRegister,renderRegister,renderHomeView);

router.post('/registrar',renderRegisterBdD,renderHomeView)

//get todos los servicios
router.get('/',(req,res)=>{
    let sql='select*from amdesinfecciones.servicios'
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })


})   

//get un servicio especifico

router.get('/:id',(req,res)=>{
    const {id}=req.params
    let sql='select*from amdesinfecciones.servicios where id=?'
    conexion.query(sql,[id],(err,rows,fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar servicio
router.post('/',(req, res)=>{
    const{nombre,descripcion,precio}=req.body
    let sql =`insert into amdesinfecciones.servicios(nombre, descripcion, precio) values ('${nombre}','${descripcion}','${precio}')` 
    conexion.query(sql, (err , rows, fields)=>{
        if (err) throw err
        else{
            res.json({status:'servicio agregado'})

        }

    })
})

// eliminar servicio
router.delete('/:id',(req,res)=>{
    const{id}=req.params
    let sql=`delete from amdesinfecciones.servicios where id='${id}'`
    conexion.query(sql, (err , rows, fields)=>{
        if (err) throw err
        else{
            res.json({status:'servicio eliminado'})
        }
    })
})

// modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre,descripcion,precio}= req.body

    let sql=`update amdesinfecciones.servicios set
    nombre='${nombre}',
    descripcion='${descripcion}',
    precio='${precio}',
    where id='${id}'`
    conexion.query(sql, (err , rows, fields)=>{
        if (err) throw err
        else{
            res.json({status:'servicio editado'})
        }

    })
})




module.exports=router;
