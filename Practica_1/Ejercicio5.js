//Cree una funcion que verifique si una cadena es palindroma
function palindroma(cadena) {
    let res=false;
    let invertida="";
    for (let i=cadena.length-1; i>=0;i--) {
        invertida+=cadena[i]
    }
    if (invertida===cadena) {
        res=true;
    }
    else{
        res=false;
    }
    return res;
}

const cad=palindroma("HolaMundo");
console.log(cad);