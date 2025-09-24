//Crear una promesa que devuelva un mensaje de exito despues de 3 segundos
const promesa=new Promise((resolve, reject) => {
    console.log("Esperando...");    
    setTimeout(()=>{
        resolve("Exito!!")
    },3000); 
});

promesa.then(mensaje =>{
    console.log(mensaje);
});