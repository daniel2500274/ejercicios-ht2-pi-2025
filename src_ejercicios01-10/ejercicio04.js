import readline from 'readline-sync'

// Paso 1: Solicitar número de día
const numeroDiaTexto = readline.question('Ingresa un numero de dia \n >')
const numeroDia = Number(numeroDiaTexto)
if (!isNaN(numeroDia)){
    switch (numeroDia) {
        case 1:
            console.log('Lunes')
            break;
        case 2:
            console.log('Martes')
            break;
        case 3:
            console.log('Miercoles')
            break;
        case 4:
            console.log('Jueves')
            break;
        case 5:
            console.log('Viernes ')
            break;
        case 6:
            console.log('Sábado')
            break;
        case 7:
            console.log('Domingo')
            break;
        default:
            console.log('Ingresa un dia en el rango de 1-7 ')
            break;
    }
}else {
    console.log('Se ingresaron datos erroneos')
}

// Paso 3: Solicitar color del semáforo
const color = readline.question("¿Cual es tu color favorito? \n >")

// Paso 4: switch para interpretar semáforo
switch (color   ) {
    case "verde":
        console.log('Puede Avanzar')
        break;
    case "rojo":
        console.log('Detengase')
        break;
    case "amarillo":
        console.log('Pase con precaución')
        break;
        default:
            console.log('Ingresaste un color erroneo')
        break;
}
