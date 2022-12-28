const express = require("express");
const Servicios = require("../../models").servicios;

const {
  renderLoginView,
  login,
  renderHomeView,
  logout,
  renderRegister,
  registrar,
  renderRegisterBdD,
  renderCarrito,
} = require("../controllers/user");
const {
  validateSession,
  validateNoSession,
  validateRegister,
} = require("../middlewares/user");
const router = express.Router();
const conexion = require("../../config/conexion");
const { servicios } = require("../../models");

router.get("/login", renderLoginView);
router.post("/login", login);
router.get("/logout", logout);

router.post("/servicios", renderCarrito);
router.get("/home", validateSession, renderHomeView);

router.get("/registrar", registrar);
router.post("/registrarr", validateRegister, renderRegister, renderHomeView);

router.post("/registrar", renderRegisterBdD, renderHomeView);

//get todos los servicios
router.get("/listService", (req, res) => {
  
  Servicios.findAll()
  .then((response)=>res.status(200).json(response))
  .catch((err)=>{
    console.log(err)
  })
});


//get un servicio especifico

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Servicios.findByPk(id)
  .then((response)=>res.status(200).json(response))
  .catch((err)=>{
    console.log(err)
  })

  
});

//agregar servicio
router.post("/create", (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  const newService = {
    nombre,
    descripcion,
    precio,
  };
  Servicios.create(newService)
    .then((response) => res.status(200).json(response))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// eliminar servicio
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Servicios.destroy({
    where:{
      id
    }
  })
    .then((response) => res.status(200).json("se elimino el servicio"))
    
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
      
  })
 /* let sql = `delete from amdesinfecciones.servicios where id='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "servicio eliminado" });
    }
  });*/
});

// modificar
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio } = req.body;

    Servicios.update({
     nombre ,descripcion,precio

    },{
      where:{id}
    })
    .then((response) => res.status(200).json("se modifico el servicio"))
    
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
});})

module.exports = router;
