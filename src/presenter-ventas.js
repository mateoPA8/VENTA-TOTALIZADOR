import { ingresarItems,ingresarPrecioItems,seleccionarUnEstado,selecEstadoMostrarImpuesto,mostrarPrecioNeto} from "./funciones";

const uno=document.querySelector("#item");
const formItems=document.querySelector("#ingresarItems-form");
const divItems=document.querySelector("#ingresarMostrar-div");


const precioItems=document.querySelector("#precioItems");
const formingresarPrecioXItems=document.querySelector("#ingresarPrecioXItems-form");
const divingresarPrecioItems=document.querySelector("#ingresarPrecioItems-div");

const estado=document.querySelector("#estados");
const formSeleccionarEstado=document.querySelector("#seleccionarEstado-form");
const divSeleccionarEstado=document.querySelector("#seleccionarEstado-div");

const formPrecioNeto=document.querySelector("#precioNeto-form");
const divPrecioNeto=document.querySelector("#precioNeto-div");

formItems.addEventListener("submit", (event) => {
    event.preventDefault();
  
    divItems.innerHTML = "<p>" + ingresarItems(uno.value) + "</p>";
  });
formingresarPrecioXItems.addEventListener("submit", (event) => {
    event.preventDefault();
  
    divingresarPrecioItems.innerHTML = "<p>" + ingresarPrecioItems(uno.value,precioItems.value) + "</p>";
  });

  formSeleccionarEstado.addEventListener("submit", (event) => {
    event.preventDefault();
  
    divSeleccionarEstado.innerHTML = "<p>" + seleccionarUnEstado(estado.value) + "</p>";
  });

  formSeleccionarEstado.addEventListener("submit", (event) => {
    event.preventDefault();
  
    divSeleccionarEstado.innerHTML = "<p>" + selecEstadoMostrarImpuesto(estado.value) + "</p>";
  });

  formPrecioNeto.addEventListener("submit", (event) => {
    event.preventDefault();
  
    divPrecioNeto.innerHTML = "<p>" + mostrarPrecioNeto(uno.value,precioItems.value) + "</p>";
  });