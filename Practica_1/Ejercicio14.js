//Proporcione un ejemplo para convertir una promesa en un callback

function promesaSuma(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") reject("Error");
    else resolve(a + b);
  });
}

function sumaConCallback(a, b, callback) {
  promesaSuma(a, b).then(resultado => callback(null, resultado)).catch(error => callback(error));
}

sumaConCallback(3, 4, (err, res) => {
  if (err) console.log(err);
  else console.log(res);
});