//Destructuring de objetos 

const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5',

    },
    frameworks:['React','VueJS', 'AngularJS']    

}

console.log(aprendiendoJS);


//Version anterior

//let version = aprendiendoJS.version.anterior;
//let frameworks = aprendiendoJS,frameworks[1];

//console.log(frameworks);

let {version} = aprendiendoJS.version;
console.log(version);
 