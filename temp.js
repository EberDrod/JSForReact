// Template strings

const nombre = 'Juan';
const trabajo = 'Desarrollador Web';


//Concatenar en la nueva versión

console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector('#app');
//let html = '<ul>'+
//                '<li>Nombre:' + nombre + '</li>'+
//                '<li>Trabajo:' + trabajo + '</li>' +
        
//            '</ul>';

//Todo lo que este dentro de esta funcion va ser tratada como un template
let html = `
            <ul>
                <li>Nombre: ${nombre} </li>
                <li>Trabajp: ${trabajo}</li> 
            </ul>

    `;


contenedorApp.innerHTML = html;







