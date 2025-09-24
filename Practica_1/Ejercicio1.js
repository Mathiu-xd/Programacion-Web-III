//Crear una funcion que cuente cuantas veces aparece cada vocal en un texto y devuelva el resultado en un objeto
function contarVocales(cadena) {
    const vocales={a:0,e:0,i:0,o:0,u:0,}
    for (let i= 0; i< cadena.length; i++) {
        if (cadena[i]=='a'||cadena[i]=='A') {
           vocales.a++; 
        }else if(cadena[i]=='e'||cadena[i]=='E'){
            vocales.e++;
        }else if(cadena[i]=='i'||cadena[i]=='I'){
            vocales.i++;
        }else if(cadena[i]=='o'||cadena[i]=='O'){
            vocales.o++;
        }else if(cadena[i]=='u'||cadena[i]=='U'){
            vocales.u++;
        }
    }
    return vocales;
}

const cad=contarVocales("parangArIcutirimicuarO");
console.log(cad);