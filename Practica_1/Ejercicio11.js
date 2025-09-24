//Proporcione un ejemplo concreto de encadenamiento de promesas
//1
new Promise((resolve, reject) => {
  resolve(2);
})
.then(num => {
  return num + 3;
})
.then(resultado => {
  console.log("Resultado final:", resultado);
});
