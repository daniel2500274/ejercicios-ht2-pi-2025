
function calcularAreaTriangulo(medidaBase, medidaAltura) {
    let areaCalculada = (medidaBase * medidaAltura) / 2;
    return areaCalculada;
}

function mostrarSaludo(nombrePersona) {
    console.log("Hola, " + nombrePersona + ". Bienvenido al sistema de geometría");
}


// 1. Solicitar valores al usuario
let baseIngresadaTexto = prompt("Ingresa la base del triángulo:");
let baseIngresada = parseFloat(baseIngresadaTexto); // Convertimos el texto a número

let alturaIngresadaTexto = prompt("Ingresa la altura del triángulo:");
let alturaIngresada = parseFloat(alturaIngresadaTexto); // Convertimos el texto a número

let nombreUsuario = prompt("Por favor, ingresa tu nombre:");

// Verificamos los datos de entrada
if (isNaN(baseIngresada) || isNaN(alturaIngresada) || baseIngresada <= 0 || alturaIngresada <= 0) {
    alert("Por favor, ingresa valores numéricos positivos para la base y la altura.");
} else {
    let resultadoArea = calcularAreaTriangulo(baseIngresada, alturaIngresada);
    console.log("El área del triángulo es: " + resultadoArea); 
    mostrarSaludo(nombreUsuario);
}