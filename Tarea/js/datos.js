export const curso = "Diseño de Interfaces";

export const estudiantes = [
    { nombre: "Ana", notas: [16, 18, 15] },
    { nombre: "Luis", notas: [12, 10, 14] },
    { nombre: "Rosa", notas: [19, 17, 20] }
];

// Usando Spread de objeto y de arreglo (reemplazando Object.assign y concat)
const nuevoEstudiante = { ...estudiantes[0], nombre: "Ana Maria" };
export const todos = [...estudiantes, nuevoEstudiante];