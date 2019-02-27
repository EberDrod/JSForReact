const persona = [
    {nombre:'Juan', edad:23,aprendiendo:'JavaScript' },
    {nombre:'Pablo', edad:18,aprendiendo:'PHP' },
    {nombre:'Aljandra', edad:20,aprendiendo:'AdobeXD' },
    {nombre:'Karen', edad:21,aprendiendo:'Python' },
    {nombre:'Miguel', edad:38,aprendiendo:'React' },
    
]


console.log(persona);


const mayores= persona.filter(persona =>{
    return persona.edad > 28;
});

//console.log(mayores);

//Que aprende alejandra y su edad 

const alejandra = persona.find(persona =>{
    return persona.nombre === 'Alejandra';
});
console.log(`Alejandra esta aprendiendo` + alejandra.aprendiendo);


// Reduce 
