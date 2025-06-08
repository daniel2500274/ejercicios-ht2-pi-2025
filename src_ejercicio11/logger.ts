import * as fs from 'fs';
import * as path from 'path';

const LOG_FILE_PATH = path.join(__dirname, 'log.txt');


export function registrarLog(mensaje: string): void {
    const timestamp = new Date().toISOString();
    const lineaLog = `[${timestamp}] ${mensaje}\n`;

    try {
        fs.appendFileSync(LOG_FILE_PATH, lineaLog, 'utf8');
    } catch (error: any) {
        console.error(`Error al escribir en el archivo de log: ${error.message}`);
    }
}