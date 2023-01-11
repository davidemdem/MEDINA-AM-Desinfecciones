const express = require("express");
const Users = require("../../models").users;

const Router= express.Router();

const conexion = require("../../config/conexion");
const router = require("./home");

Router.post("/login",(req, res) =>{
    const { email, password } = req.body;
    const user = Users.filter(email)
  
  
  const isValidPassword = bcrypt.compareSync(password, user.password);

  if (!isValidPassword) {
    return res.status(500).json("Usuario o contraseña incorrecto");
  }

  delete user.password; //eliminamos la contraseña de los datos del usuario
  return res.status(200).json(user)
})
router.post("/registrar",(req, res) => {
    const { email, password} = req.body;
    const passwordHashed = bcrypt.hashSync(password, 10);
  
    let newUser = {
      id: readUsers.length + 1,
      username,
      email,
      password: passwordHashed,
      name,
    };
    readUsers.push(newUser);
    let userDataBase = JSON.stringify(readUsers);
    console.log("hola");
    fs.writeFileSync("user.json", userDataBase, "utf-8");
    res.redirect("home");
  })
module.exports=Router 
