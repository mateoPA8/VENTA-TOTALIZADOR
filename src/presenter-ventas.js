import ingresarItems from "./ingresarItems";
import ingresarPrecioItems from "./ingresarPrecioItems";

const uno=document.querySelector("#item");
const formItems=document.querySelector("#ingresarItems-form");
const divItems=document.querySelector("#ingresarMostrar-div");


const precioItems=document.querySelector("#precioItems");
const formingresarPrecioXItems=document.querySelector("#ingresarPrecioXItems-form");
const divingresarPrecioItems=document.querySelector("#ingresarPrecioItems-div");


formItems.addEventListener("submit", (event) => {
    event.preventDefault();
  
    divItems.innerHTML = "<p>" + ingresarItems(uno.value) + "</p>";
  });
formingresarPrecioXItems.addEventListener("submit", (event) => {
    event.preventDefault();
  
    divingresarPrecioItems.innerHTML = "<p>" + ingresarPrecioItems(uno.value,precioItems.value) + "</p>";
  });