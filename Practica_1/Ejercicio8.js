//Realizar un codigo para ejecutar una funcion callback despues de 2 segundos
function ejecutar(callback) {
    setTimeout(()=>{
        callback();
    },2000);
}
ejecutar(()=>{
    console.log("Hola"); 
});