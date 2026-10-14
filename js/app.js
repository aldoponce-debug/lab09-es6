import bienvenida, { iva, calcularTotal, formatearMoneda } from "./utils.js";



// ===== Ejercicio 5: Módulos =====
console.log(bienvenida("Ana")); // Bienvenido(a), Ana

const productos = [
  { nombre: "Mouse", precio: 45, cantidad: 2 },
  { nombre: "Teclado", precio: 189, cantidad: 1 }
];

const lista = document.querySelector("#lista");
productos.forEach(({ nombre, precio, cantidad }) => {
  const subtotal = formatearMoneda(calcularTotal(precio, cantidad));
  lista.innerHTML += `<li>${nombre} x${cantidad} = ${subtotal}</li>`;
});

const total = productos.reduce((t, { precio, cantidad }) => t + calcularTotal(precio, cantidad), 0);
document.querySelector("#total").textContent = `Total con IGV (${iva * 100}%): ${formatearMoneda(total)}`;