const express = require("express");
const Servicios = require("../../models").servicios;

const {
  renderLoginView,
  login,
  renderHomeView,
  logout,
  renderRegister,
  registrar,
  renderCarrito,
  listService,unServicio,createService,deleteService,editService
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


router.post("/registrar", renderRegister);



//get todos los servicios
router.get("/listService",listService);

//get un servicio especifico

router.get("/:id",unServicio);

//agregar servicio
router.post("/create",createService);

// eliminar servicio
router.delete("/:id",deleteService);

// modificar
router.put("/:id",editService )

module.exports = router;
