//Objetos

//¿Preguntarle a dharma como construir esto? ¿Como literal o constructor?


//Object Literal 
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500 
}

/*
const persona2 = {
    nombre: 'De Dios    ',
    profesion: 'Desarrollador Web',
    edad: 500 
}*/



console.log (persona);
//console.log (persona2);

//Object Cosntructor 

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;

}

const tarea1 = new Tarea ('Aprender Javascript',' Urgente');
const tarea2 = new Tarea ('Prepara cafe', 'Urgente');
const tarea3 = new Tarea ('Pasear al perro','Media');
const tarea4 = new Tarea ('Conocer a mis suegros', 'Urgente');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);



