const shopContent =document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");


const servicios = [
  {
    id: 1,
    nombre: "desinfeccion en  domicilio",
    descripcion:"servicio aplicado para combatir hormigas, cucarachas, alacranes , arañas , etc",
    precio: 4000,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "desinfeccion en local comercial",
    descripcion:"servicio aplicado para combatir hormigas ,cucarachas, alacranes, arañas , etc",
    precio: 2500,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "desratizacion en domicilio",
    descripcion: "...",
    precio: 3000,
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "aplicacion de gel insecticida en local",
    descripcion: "...",
    precio: 2000,
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "limpieza de tanques y cisternas",
    descripcion: "...",
    precio: 6000,
    cantidad: 1,
  },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito</h1>
      `;
  modalContainer.appendChild(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.appendChild(modalButton);

  carrito.forEach((servicio) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
      <H3>${servicio.nombre}</h3>
      <p class="price">${servicio.precio}$</p>
      <span class="restar"> - </span>
      <p> cantidad: ${servicio.cantidad}</p>
      <span class="sumar"> + </span>
      <p> Total: ${servicio.cantidad * servicio.precio}</p>
      `;
    modalContainer.appendChild(carritoContent); //buscar appendChild(padre o hijo)

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (servicio.cantidad !== 1) {
        servicio.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");

    sumar.addEventListener("click", () => {
      servicio.cantidad++;
      saveLocal();
      pintarCarrito();
    });

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "delete-product";
    carritoContent.appendChild(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });

  const total = carrito.reduce(
    (acumulador, el) => acumulador + el.precio * el.cantidad,
    0
  );

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `total a pagar: ${total}$`;
  modalContainer.appendChild(totalBuying);
};
verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const foundId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  saveLocal();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLenght", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();

//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
// get item

// muestra todos los servicios
servicios.forEach((servicio) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <h2>${servicio.nombre}</h2>
    <h4>${servicio.descripcion}</h4>
    <p class="price">${servicio.precio}$</p>
    `;
  shopContent.appendChild(content);

  let comprar = document.createElement("button");
  comprar.innerText = "Solicitar Servicio";
  comprar.className = "comprar";

  content.appendChild(comprar);
  pintarCarrito();
  comprar.addEventListener("click", () => {
    const repeat = carrito.some(
      (repeatProduct) => repeatProduct.id === servicio.id
    );
    //console.log("hola", repeat);
    if (repeat === true) {
      carrito.map((prod) => {
        if (prod.id === servicio.id) {
          prod.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: servicio.id,
        nombre: servicio.nombre,
        precio: servicio.precio,
        cantidad: servicio.cantidad,
      });
      carritoCounter();
      saveLocal();
    }
    pintarCarrito();
  });

  /*carrito.push({
        id: servicio.id,
        nombre: servicio.nombre,
        descrpicion: servicio.descripcion,
        precio: servicio.precio,
        cantidad: servicio.cantidad
    })*/
});

