//Arrow Fuctions
/*let viajando = function(destino){
    return `Viajando ala ciudad de: ${destino}`;
}

let viaje; 
viaje = viajando ('Paris');
viaje = viajando ('Londres');
viaje = viajando ('Barcelona');

console.log(viaje);*/


//Esta es la misma funcio pero en arrow 
/*let viajando =  destino => {
    return `Viajando a la ciudad de: ${destino}`;
}*/

let viajando = destino =>`Viajando a la ciudad de: ${destino}`;

let viaje; 
viaje = viajando ('Paris');
viaje = viajando ('Londres');
viaje = viajando ('Barcelona');

console.log(viaje);



