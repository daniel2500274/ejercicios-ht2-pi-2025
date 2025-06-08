// Paso 1: Declarar interfaz Usuario
interface DatosUsuario {
    nombre: string;
    edad: number;
    activo: boolean;
    correo?: string; // El signo de interrogación indica que esta propiedad es opcional
}

// Paso 2: Declarar interfaz InformacionLogIn
interface DatosParaIniciarSesion {
    correo: string;
    clave: string;
    recaptcha: boolean;
}

// Paso 3: Crear variable de tipo DatosUsuario y asignarle un valor
const usuarioActual: DatosUsuario = {
    nombre: 'Juan Perez',
    edad: 30,
    activo: true,
    correo: 'juan.perez@example.com'
};

console.log("--- Información del Usuario Actual ---");
console.log(usuarioActual);

// Paso 4: Implementar función loguear
function intentarLoguear(infoLogin: DatosParaIniciarSesion): void {
    const correoEsValido = infoLogin.correo.includes('@') && infoLogin.correo.includes('.');
    const claveEsSegura = infoLogin.clave.length >= 6;
    const recaptchaEsCorrecto = infoLogin.recaptcha === true;

    if (correoEsValido && claveEsSegura && recaptchaEsCorrecto) {
        console.log('Acceso permitido');
    } else {
        console.log('Datos inválidos');
    }
}

// Paso 5:
console.log("\n--- Intentando Iniciar Sesión con Datos Válidos ---");
const datosLoginValidos: DatosParaIniciarSesion = {
    correo: 'correo@example.com',
    clave: '123456',
    recaptcha: true
};
intentarLoguear(datosLoginValidos);

console.log("\n--- Intentando Iniciar Sesión con Datos Inválidos (clave corta) ---");
const datosLoginClaveCorta: DatosParaIniciarSesion = {
    correo: 'otro@ejemplo.com',
    clave: '123',
    recaptcha: true
};
intentarLoguear(datosLoginClaveCorta);

console.log("\n--- Intentando Iniciar Sesión con Datos Inválidos (correo sin @) ---");
const datosLoginCorreoInvalido: DatosParaIniciarSesion = {
    correo: 'correoejemplo.com',
    clave: 'claveSegura',
    recaptcha: true
};
intentarLoguear(datosLoginCorreoInvalido);

console.log("\n--- Intentando Iniciar Sesión con Datos Inválidos (recaptcha falso) ---");
const datosLoginRecaptchaFalso: DatosParaIniciarSesion = {
    correo: 'final@ejemplo.com',
    clave: 'claveMasSegura',
    recaptcha: false
};
intentarLoguear(datosLoginRecaptchaFalso);