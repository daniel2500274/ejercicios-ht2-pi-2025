import { cargarDB, guardarCambiosDB, hacerBackupDB } from './db';
import { registrarLog } from './logger';

type Registro = {
    [key: string]: any;
};

export function listarRegistros(nombreTabla: string): Registro[] {
    const db = cargarDB();
    const registros = db[nombreTabla] || [];
    registrarLog(`Listando registros de la tabla: ${nombreTabla}. Cantidad: ${registros.length}`);
    return registros;
}

export function insertarRegistro(nombreTabla: string, campoId: string, data: Registro): Registro {
    const db = cargarDB();
    if (!db[nombreTabla]) {
        db[nombreTabla] = [];
    }

    const nuevoId = db[nombreTabla].length > 0
        ? Math.max(...db[nombreTabla].map((item: Registro) => item[campoId] || 0)) + 1
        : 1;

    const nuevoRegistro = { [campoId]: nuevoId, ...data };
    db[nombreTabla].push(nuevoRegistro);
    guardarCambiosDB(db);
    registrarLog(`Insertado nuevo registro en "${nombreTabla}" con ID: ${nuevoId}`);
    return nuevoRegistro;
}

export function eliminarRegistro(nombreTabla: string, campoId: string, valorId: any): Registro | undefined {
    const db = cargarDB();
    if (!db[nombreTabla]) {
        registrarLog(`Intento de eliminar de tabla no existente: ${nombreTabla}`);
        return undefined;
    }

    const indiceRegistro = db[nombreTabla].findIndex((registro: Registro) => registro[campoId] === valorId);

    if (indiceRegistro === -1) {
        registrarLog(`Registro con ID "${valorId}" no encontrado en tabla "${nombreTabla}".`);
        return undefined;
    }

    const [registroEliminado] = db[nombreTabla].splice(indiceRegistro, 1);
    guardarCambiosDB(db);
    registrarLog(`Eliminado registro de "${nombreTabla}" con ID: ${valorId}`);
    return registroEliminado;
}


export function crearBackupDeBaseDeDatos(): void {
    hacerBackupDB();
    registrarLog('Backup de la base de datos creado.');
}