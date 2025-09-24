//Proporcione un ejemplo concreto donde el anidamiento de promesas se puede reescribir mejor con async/await
function obtenerNumero() {
  return new Promise(resolve => resolve(5));
}

function multiplicarPorDos(num) {
  return new Promise(resolve => resolve(num * 2));
}

function restarTres(num) {
  return new Promise(resolve => resolve(num - 3));
}

// aniadod
obtenerNumero()
  .then(num => {
    multiplicarPorDos(num)
      .then(resultado => {
        restarTres(resultado)
          .then(final => {
            console.log("Resultado final:", final); // 7
          });
      });
  });
