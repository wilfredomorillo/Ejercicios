//Escribir una función que reciba un arreglo de números y 
//devuelva un nuevo arreglo con solo los números pares.

function Pares(Array) {

    let NewArray= []
    for (let i = 0; i < Array.length; i++) {
    
        if(Array[i]  %  2 === 0) NewArray.push(Array[i])        
    }
     return NewArray
}
console.log(Pares([2,4,8,25,7,9,38]));



