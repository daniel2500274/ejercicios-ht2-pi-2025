const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

const rl = readline.createInterface({input, output});

function pregunta(textoConsulta) {
    return new Promise((resolve) => {
        rl.question(textoConsulta, (respuestaUsiario) => {
            resolve(respuestaUsiario);
        })
    })
}

async function main() {
    try {
        const nombreUsuario = await pregunta('¿cual es tu nombre? ');
        const edad = await pregunta('¿Cual es tu edad? ');
        const estado = await pregunta('¿Eres un estudiante activo? ')
        console.log(`Hola mi nombre es ${nombreUsuario}, tengo ${edad} años, ¿Soy un estudiante activo? ${estado}`);
    } finally {
        rl.close();
    }
}
main()