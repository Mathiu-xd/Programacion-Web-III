//Proporcione un ejemplo para migrar una función con promesas a async/await

function obtenerNumero() {
  return Promise.resolve(5);
}
function multiplicarPorDos(num) {
  return Promise.resolve(num * 2);
}
// con promesas
obtenerNumero()
  .then(num => multiplicarPorDos(num))
  .then(res => console.log(res));
// con sync/await
async function calcular() {
  const num = await obtenerNumero();
  const res = await multiplicarPorDos(num);
  console.log(res);
}
calcular();