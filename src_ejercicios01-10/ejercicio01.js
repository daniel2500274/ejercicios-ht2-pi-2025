import readline from 'readline-sync'

// 👉 Paso 1: Solicitar entrada de datos
const nombre = readline.question('¿Cual es tu nombre? ');
const edadTexto = readline.question('¿Cual es tu edad? ');
const activoTexto = readline.question('¿Eres un estudiante activo? (si/no): ');

// 👉 Paso 2: Declarar y convertir datos
const edad = parseInt(edadTexto);
const activo = activoTexto.toLowerCase() === 'si' || activoTexto.toLowerCase() === 'sí';

// 👉 Paso 3: Imprimir mensaje personalizado
console.log(`Hola mi nombre es ${nombre}, tengo ${edad} años, ¿Soy un estudiante activo? ${activo}`);

// 👉 Paso 4: Imprimir tipos de datos usando typeof
console.log(`Tipo de nombre: ${typeof nombre}`);
console.log(`Tipo de edad: ${typeof edad}`);
console.log(`Tipo de activo: ${typeof activo}`);

// 👉 Paso 5: Declarar variables especiales y mostrar su tipo
let valorNulo = null;
let valorNoAsignado;
console.log(`Tipo de valorNulo: ${typeof valorNulo}`);
console.log(`Tipo de valorNoAsignado: ${typeof valorNoAsignado}`);