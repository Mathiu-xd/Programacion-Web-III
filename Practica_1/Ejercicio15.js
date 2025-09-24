//Poporcione un ejemplo para convertir un callback en una promesa.

function sumaCallback(a, b, callback) {
  callback(a + b);
}

function sumaPromesa(a, b) {
  return new Promise(resolve => {
    sumaCallback(a, b, resultado => resolve(resultado));
  });
}

sumaPromesa(3, 4).then(res => console.log(res));