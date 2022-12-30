const db = require("../models");
const path = require("path");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const cors = require('cors')

db.sequelize
.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors())

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(
  session({
    secret: "123456789",
    cookie: {
      expires: false,
    },
    saveUninitialized: true,
    resave: false,
  })
);
app.use(cookie());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes/home"));
app.use(require("./routes/helpers"));
app.use(require("./routes/user"));

app.use(express.json()); //poder utilizar datos json




app.get("/detalles", (req, res) => {
  res.render("servicios.ejs");
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/carrito", (req, res) => {
  res.render("./Carrito.ejs");
});

app.listen(3000, () => console.log("Servidor iniciado en elpuerto 3000"));
