//Promise

const aplicarDescuento = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //Cambiar esta variable para activar .catch
        let descuento = false;

        if(descuento){
            resolve('Descuento aplicado');
       
        }else{
            reject('No se pudo aplicar descuento ')

        }
    },3000);
});
//console.log(aplicarDescuento); 
aplicarDescuento.then(resultado =>{
    console.log(resultado);
}).catch(error =>{
    console.log(error);
})

