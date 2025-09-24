//Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede reescribir mejor con asyn/await
//haciendo el codigo mas limpio y mantenible

function obtenerNumero() {
  return new Promise(resolve => {
    setTimeout(() => resolve(5), 1000);
  });
}

function multiplicarPorDos(num) {
  return new Promise(resolve => {
    setTimeout(() => resolve(num * 2), 1000);
  });
}

async function calcular() {
  const num = await obtenerNumero();
  const resultado = await multiplicarPorDos(num);
  console.log("Resultado final:", resultado); // 10
}

calcular();
