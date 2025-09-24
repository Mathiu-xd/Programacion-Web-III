// Crear una funcion que reciba un arreglo de numeros y devuelva el numero mayor y menor en un objeto
function mayorMenor(A) {
    const res={may:0,men:1000,}
    for (let i=0; i< A.length; i++) {
        if (A[i]>res.may) {
            res.may=A[i];
        }
    }
    for (let j=0; j< A.length; j++) {
        if (A[j]<res.men) {
            res.men=A[j];
        }
    }
    return res;
}

let a=mayorMenor([1,2,3,4,6]);
console.log(a);