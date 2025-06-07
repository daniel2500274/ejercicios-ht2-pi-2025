import readline from 'readline-sync'

// Paso 1: Solicitar fecha de nacimiento
const fechaNacimientoTexto = readline.question('Ingresa tu fecha de nacimiento en formato YYYYMMDD \n > ')
const anioActual = new Date().getFullYear()
// evaluamos que el año sea de 8 posiciones y que no contenga caracteres extraños:
if (fechaNacimientoTexto.length === 8){
    const anioUsuario = Number(fechaNacimientoTexto.substring(0,4))
    if (!isNaN(anioUsuario) ) {
        if (anioActual < anioUsuario){
            console.log('El año ingresado no puede ser mayor al actual : ')
            console.log(`Año de entrada: ${anioUsuario} Año actual: ${anioActual}`)
        } else {
            const edadUsuario = anioActual -anioUsuario
            if (anioUsuario <= 0){
                console.log(`El año ingresado no puede ser cero o menor a cero, año ingresado : ${anioUsuario}`)
            } else if(edadUsuario <= 12 ){
                console.log(' Eres un niño ')
            }else if (edadUsuario >12 && edadUsuario <=17){
                console.log(' Eres un adolecente ')
            }else if (edadUsuario >=18 && edadUsuario <=64){
                console.log(' Eres un adulto')
            }else{
                console.log(' Eres un adulto mayor')
            }
        }
    }else {
        console.log('La fecha ingresada contiene caracteres invalidos use formato YYYYMMDD sin guiones')
        console.log(fechaNacimientoTexto)
    }
} else {
    console.log(' ⚠️ La fecha ingresada no tiene 8 posiciones de longitud! ')
}



// Paso 3: Solicitar nota del examen
const notaTexto = readline.question('Ingresa la nota del examen  \n >')
const nota = Number(notaTexto)
if (!isNaN(nota)){
    if (nota >= 90 ){
        console.log('Tienes una nota : A')
    }else if (nota >= 80 && nota <= 89 ){
        console.log('Tienes una nota : B')
    }else if (nota >= 70 && nota <= 79 ){
        console.log('Tienes una nota : C')
    }else if (nota >= 60 && nota <= 69 ){
        console.log('Tienes una nota : D')
    }else {
        console.log('Tienes una nota : F')
    }
} else {
    console.log('La nota ingresada es invalida o no es un numero')
}



// Paso 4: Evaluar calificación con else if