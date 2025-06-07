import readline from 'readline-sync'

// Paso 1: Solicitar precio y descuento
// const precioTexto = ...
// const descuentoTexto = ...
const precioTexto = readline.question('> Ingresa el precio del articulo : ');
const descuentoTexto = readline.question('> Ingresa el % de descuento : ');

// Paso 2: Convertir a número y calcular precio final
const precio = Number(precioTexto);
const descuento = Number(descuentoTexto);

// Paso 3: Imprimir resultado del cálculo
if ( !isNaN(precio) && !isNaN(descuento)) {
     if (descuento > 0){
         const total = (precio * ((100-descuento)/100))
         console.log(`===> El valor del producto es ${precio} con un descuento de ${descuento}%, total del producto es Q${total}`);
     } else {
         console.log(' ⚠️ El descuento no puede ser cero')
     }
 } else {
     console.log('Hay un error en tus datos de entrada verifica e intentalo de nuevo');
 }

// Paso 4: Solicitar estatura
const estaturaTexto = readline.question('> Ingresa tu estatura : ')
const estatura = Number(estaturaTexto);


// Paso 5: Verificar si puede subirse al juego
// Paso 6: Imprimir resultado de la evaluación
if(!isNaN(estatura)) {
    if(estatura >= 120 && estatura <= 200) {
        console.log(' ¡Excelente! Puedes ingresar. 🎉')
    }  else if (estatura <= 0) {
        console.log(`La estatura no puede ser menor o igual a cero, haz ingresado ${estatura}`);
    } else {
        console.log('Tu estatura no cumple con los requisitos mínimos-máximos')
    }
} else {
    console.log('Haz ingresado un valor incorrecto en tu estatura')
}