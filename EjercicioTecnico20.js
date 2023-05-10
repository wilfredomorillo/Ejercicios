//Escribir una función que reciba un arreglo de objetos y un string,
// y devuelva true si todos los objetos tienen una propiedad que coincide
// con el string, y false si no lo tienen.



function coincide(arreglo, string) {

 return arreglo.every((e)=>e.hasOwnProperty(string))

}