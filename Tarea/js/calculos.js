// Arrow function con operador Rest (...) para recibir múltiples notas
export const promedio = (...notas) => {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
};

// Parámetro por defecto (si no envían minima, vale 13)
export const estado = (nota, minima = 13) => {
    return nota >= minima ? "Aprobado" : "Desaprobado";
};

// Arrow function aplicando desestructuración en el parámetro ({ nombre, notas })
export const reporte = (estudiante) => {
    const { nombre, notas } = estudiante;
    const prom = promedio(...notas); // Operador Spread para pasar las notas
    
    // Template literals para formatear el texto
    return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};