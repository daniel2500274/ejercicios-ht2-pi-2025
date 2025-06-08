import * as fs from 'fs';
import * as path from 'path';

// Definición de la interfaz para la estructura de la base de datos
interface Database {
    [tableName: string]: any[];
}

const DB_FILE_PATH = path.join(__dirname, 'db.json');
const BACKUPS_DIR_PATH = path.join(__dirname, 'backups');

export function cargarDB(): Database {
    try {
        if (!fs.existsSync(DB_FILE_PATH)) {
            console.log('db.json no encontrado, creando uno nuevo.');
            fs.writeFileSync(DB_FILE_PATH, JSON.stringify({}), 'utf8');
            return {};
        }
        const dbContent = fs.readFileSync(DB_FILE_PATH, 'utf8');
        return dbContent ? JSON.parse(dbContent) : {};
    } catch (error: any) {
        console.error(`Error al cargar la base de datos: ${error.message}`);
        return {};
    }
}

export function guardarCambiosDB(data: Database): void {
    try {
        fs.writeFileSync(DB_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');
    } catch (error: any) {
        console.error(`Error al guardar cambios en la base de datos: ${error.message}`);
    }
}

export function hacerBackupDB(): void {
    try {
        if (!fs.existsSync(BACKUPS_DIR_PATH)) {
            fs.mkdirSync(BACKUPS_DIR_PATH);
        }

        const fechaActual = new Date();
        const formatoFecha = (num: number) => num.toString().padStart(2, '0');

        const anio = fechaActual.getFullYear();
        const mes = formatoFecha(fechaActual.getMonth() + 1);
        const dia = formatoFecha(fechaActual.getDate());
        const horas = formatoFecha(fechaActual.getHours());
        const minutos = formatoFecha(fechaActual.getMinutes());
        const segundos = formatoFecha(fechaActual.getSeconds());

        const nombreBackup = `db_${anio}-${mes}-${dia}_${horas}-${minutos}-${segundos}.json`;
        const rutaBackup = path.join(BACKUPS_DIR_PATH, nombreBackup);

        fs.copyFileSync(DB_FILE_PATH, rutaBackup);
        console.log(`Backup creado: ${nombreBackup}`);
    } catch (error: any) {
        console.error(`Error al crear el backup: ${error.message}`);
    }
}