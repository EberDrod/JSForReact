//Object Literal 
/*Esto es lo contrario a Destructuring 
bject */ 
/*
const band = 'Incubus';
const genero = 'Alternativo';
const canciones = ['Dig', 'Anna Molly', 'Warning'];
/* -Forma Nueva
const incubus = {
    banda : banda,
    genero: genero,
    canciones: canciones,
}*/

//Forma nueva 
//const incubus = {banda, genero, canciones};



//console.log(incubus);


 // Agregar  metodos o fucniones 
 const persona = {
    nombre:'Juan',
    edad: 'Desarrollo Web',
    musicaRock: true,
    mostrarInformacion(){
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }

 }

persona.mostrarInformacion();