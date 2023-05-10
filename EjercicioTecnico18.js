//Escribir una función que reciba un arreglo de números y un número, y 
//devuelva true si alguno de los números del arreglo es igual al número dado, y
//false si no lo es.
 function coincide(arreglo, n) {

    for (let i = 0; i < arreglo.length; i++) {
        if ( arreglo[i]===n) return true
        
    }
    return false

 }

 console.log(coincide([1,3,4,5,12], 12));



