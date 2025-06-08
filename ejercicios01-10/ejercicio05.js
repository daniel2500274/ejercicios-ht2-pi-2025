function iniciarConteoRegresivo() {
    let segundosParaTemporizadorTexto = prompt("¿Cuántos segundos quieres temporizar?");
    let segundosParaTemporizador = parseInt(segundosParaTemporizadorTexto);

    if (isNaN(segundosParaTemporizador) || segundosParaTemporizador < 0) {
        alert("Por favor, ingresa un número de segundos válido.");
        return;
    }

    let segundosRestantes = segundosParaTemporizador;

    while (segundosRestantes > 0) {
        console.log("Faltan " + segundosRestantes + " segundos");
        segundosRestantes--; // Restamos un segundo
    }

    console.log("El tiempo finalizó");
}

function mostrarMenu() {
    let opcionSeleccionada;

    do {
        opcionSeleccionada = prompt(
            "Selecciona una opción del menú:\n" +
            "1. Saludar\n" +
            "2. Mostrar hora actual\n" +
            "3. Salir"
        );

        switch (opcionSeleccionada) {
            case "1":
                alert("¡Hola! Bienvenido a este programa.");
                break;
            case "2":
                let fechaActual = new Date();
                alert("La hora actual es: " + fechaActual.toLocaleTimeString());
                break;
            case "3":
                alert("¡Hasta luego! Gracias por usar el programa.");
                break;
            default:
                alert("Opción no válida. Por favor, elige 1, 2 o 3.");
        }
    } while (opcionSeleccionada !== "3");
}

function main() {
    iniciarConteoRegresivo();
    mostrarMenu();
}
main();