enum Prioridad {
    ALTA = '🔴',
    MEDIA = '🟡',
    BAJA = '🔵',
}

enum EstadoTarea {
    PENDIENTE = 'Pendiente',
    EN_PROGRESO = 'En Progreso',
    FINALIZADA = 'Finalizada',
}

// estructura de una tarea
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
    prioridad: Prioridad;
    estado: EstadoTarea;
}

// Clase para gestionar las tareas
class GestorTareas {
    private listaDeTareas: Tarea[] = [];
    public agregarTarea(titulo: string, prioridad: Prioridad): void {
        const nuevaTarea: Tarea = {
            id: Date.now(),
            titulo: titulo,
            completada: false,
            prioridad: prioridad,
            estado: EstadoTarea.PENDIENTE,
        };
        this.listaDeTareas.push(nuevaTarea);
        console.log(`Tarea "${titulo}" agregada con éxito.`);
    }

    public listarTareas(): void {
        if (this.listaDeTareas.length === 0) {
            console.log('No hay tareas para mostrar.');
            return;
        }
        console.log('\n--- Lista de Tareas ---');
        this.listaDeTareas.forEach((tarea) => {
            console.log(
                ` > ${tarea.prioridad} ${tarea.titulo} - Estado: ${tarea.estado}`
            );
        });
        console.log('---------------------\n');
    }
}

const gestorDeTareas = new GestorTareas();

// Agregando las primeras tareas
gestorDeTareas.agregarTarea('Estudiar para el examen de TypeScript', Prioridad.ALTA);
gestorDeTareas.agregarTarea('Revisar los correos electrónicos pendientes', Prioridad.MEDIA);
gestorDeTareas.agregarTarea('Comprar los ingredientes para la cena', Prioridad.BAJA);

console.log('--- Listado inicial de tareas ---');
gestorDeTareas.listarTareas();
