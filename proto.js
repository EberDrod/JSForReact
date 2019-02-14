//Prototype





function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
} 

Tarea.prototype.mostartInformacionTarea  = function mostartInformacionTarea(tarea,prioridad){
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea ('Aprender Javascript y React ',' Urgente');
const tarea2 = new Tarea ('Pasear al perro ',' Media');



//console.log(tarea1);
console.log(tarea1);
console.log(tarea1.mostartInformacionTarea());
console.log(tarea2);
console.log(tarea2.mostartInformacionTarea());



