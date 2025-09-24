//Cree una funcion que invierta el orden de las palabras de una frase
function invertir(cadena) {
    let invertida="";
    for (let i=cadena.length-1; i>=0;i--) {
        invertida+=cadena[i]
    }
    return invertida;
}
const cad=invertir("Hola");
console.log(cad);