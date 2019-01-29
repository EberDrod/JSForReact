console.log('Hola mundo');

const contenedorApp = document.querySelector('#app');
let html  = `
        <h1>Funciones y los diferentes tipos de funciones</h1>


`
contenedorApp.innerHTML = html;

// creando la funcion 

function saludar (nombre){
    console.log ('Bienvenido' + nombre);
}

// Asi es como se manda llamar la funcion 
saludar('Juan');
