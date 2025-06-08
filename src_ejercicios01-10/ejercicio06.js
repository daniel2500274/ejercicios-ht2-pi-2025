// Paso 1: Declarar arreglos
const listaEstudiantes = ['Carlos', 'Ana', 'Luis', 'María', 'José'];
const listaNotas = [70, 85, 55, 90, 60];

// Paso 2: Imprimir saludos personalizados para cada estudiante
console.log("--- Saludos de Bienvenida ---");

// Usamos un ciclo 'for' para recorrer cada estudiante en la lista
for (let indiceEstudiante = 0; indiceEstudiante < listaEstudiantes.length; indiceEstudiante++) {
    let nombreEstudiante = listaEstudiantes[indiceEstudiante];

    // Verificamos si el nombre termina en 'a' para decidir el saludo
    if (nombreEstudiante.endsWith('a')) {
        console.log("Bienvenida, " + nombreEstudiante);
    } else {
        console.log("Bienvenido, " + nombreEstudiante);
    }
}

// Paso 3: Calcular el promedio de las notas
console.log("\n--- Cálculo del Promedio del Grupo ---");

let sumaTotalNotas = 0;

// Usamos un ciclo 'for' para sumar todas las notas
for (let indiceNota = 0; indiceNota < listaNotas.length; indiceNota++) {
    sumaTotalNotas = sumaTotalNotas + listaNotas[indiceNota];
}

let cantidadNotas = listaNotas.length;
let promedioDelGrupo = sumaTotalNotas / cantidadNotas;

// Imprimimos el resultado final del promedio
console.log("El promedio del grupo es: " + promedioDelGrupo);