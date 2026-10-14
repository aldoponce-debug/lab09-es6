import { curso, todos } from './datos.js';
import { reporte } from './calculos.js';

// 1. Mostrar el resultado en la consola (como pedía el código original)
console.log(`Curso: ${curso}`);
todos.forEach(estudiante => console.log(reporte(estudiante)));

// 2. Mostrar los resultados en la página web usando el DOM
const listaHTML = document.getElementById('reportes');

// Agregar el título del curso
const itemCurso = document.createElement('li');
itemCurso.innerHTML = `<strong>Curso: ${curso}</strong>`;
listaHTML.appendChild(itemCurso);

// Recorrer los estudiantes y agregarlos a la lista HTML
todos.forEach(estudiante => {
    const li = document.createElement('li');
    li.textContent = reporte(estudiante);
    listaHTML.appendChild(li);
});