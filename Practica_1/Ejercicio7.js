//Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros elementos de un arreglo, mediante desesttructiracion
const A=[1,2,3,4,5]
const [primero,segundo,...resto]=A
console.log(resto);