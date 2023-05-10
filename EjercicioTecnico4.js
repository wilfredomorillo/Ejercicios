//Escribir una función que reciba un número y 
//devuelva un arreglo con todos los números desde 1 hasta ese número.

function Numero(n) {

    let arreglo= []


    while (n>=1) {
          arreglo.push(n)
          n--
      
    }
    return arreglo.reverse()
}
console.log(Numero(15));
