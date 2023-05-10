//Escribir una función que reciba un objeto y 
//devuelva un arreglo con todas las propiedades del objeto.


function ObjArray(obj) {
let arreglo= []
    for (const propiedad in obj) {
      arreglo.push(propiedad)


}
return arreglo
    
}

let myObj = {a: 1, b: 2, c: 3};
console.log(ObjArray(myObj))


