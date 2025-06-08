import {
    insertarRegistro,
    listarRegistros,
    eliminarRegistro,
    crearBackupDeBaseDeDatos,
} from './operaciones';
import { registrarLog } from './logger';

async function ejecutarSistema(): Promise<void> {
    registrarLog('Iniciando ejecución del sistema.');

    const TABLA_CLIENTES = 'clientes';
    const CAMPO_ID_CLIENTE = 'id';

    console.log('\n--- Insertando clientes ---');
    insertarRegistro(TABLA_CLIENTES, CAMPO_ID_CLIENTE, { nombre: 'Alice Smith', saldo: 1500.75 });
    insertarRegistro(TABLA_CLIENTES, CAMPO_ID_CLIENTE, { nombre: 'Bob Johnson', saldo: 800.50 });
    insertarRegistro(TABLA_CLIENTES, CAMPO_ID_CLIENTE, { nombre: 'Charlie Brown', saldo: 2300.00 });

    console.log('\n--- Listando clientes ---');
    const clientes = listarRegistros(TABLA_CLIENTES);
    if (clientes.length > 0) {
        clientes.forEach((cliente) => {
            console.log(`ID: ${cliente.id}, Nombre: ${cliente.nombre}, Saldo: ${cliente.saldo}`);
        });
    } else {
        console.log('No hay clientes para mostrar.');
    }
    console.log('\n--- Eliminando cliente con ID 2 ---');
    const clienteEliminado = eliminarRegistro(TABLA_CLIENTES, CAMPO_ID_CLIENTE, 2);
    if (clienteEliminado) {
        console.log(`Cliente eliminado: ${clienteEliminado.nombre}`);
    } else {
        console.log('No se pudo eliminar el cliente con ID 2. Quizás no existe.');
    }

    console.log('\n--- Listando clientes después de la eliminación ---');
    const clientesActualizados = listarRegistros(TABLA_CLIENTES);
    if (clientesActualizados.length > 0) {
        clientesActualizados.forEach((cliente) => {
            console.log(`ID: ${cliente.id}, Nombre: ${cliente.nombre}, Saldo: ${cliente.saldo}`);
        });
    } else {
        console.log('No hay clientes para mostrar después de la eliminación.');
    }

    console.log('\n--- Creando backup de la base de datos ---');
    crearBackupDeBaseDeDatos();

    registrarLog('Ejecución del sistema finalizada.');
}

ejecutarSistema();