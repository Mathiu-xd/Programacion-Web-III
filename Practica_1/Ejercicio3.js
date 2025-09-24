//// Crear una funcion que reciba un arreglo de numeros y devuelva en un objeto los pares e impares
function parImpar(A) {
    const res={pares:0,impares:0};
    for (let i=0; i< A.length; i++) {
        if (A[i]%2==0) {
            res.pares++
        }
        else{
            res.impares++
        }
    }
    return res;
}

const a=parImpar([1,2,3,4,5,6]);
console.log(a);