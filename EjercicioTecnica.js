//Escribir una función que reciba un arreglo de números y
//devuelva la suma de los dos números más grandes.

function SumaArray(Array) {
    let mayor1=-Infinity
    let mayor2= -Infinity

    for (let i = 0; i < Array.length; i++) {
    if(Array[i]> mayor1) { 
        mayor2= mayor1
    mayor1= Array[i]}

     else if ( Array[i]> mayor2) mayor2= Array[i]
        
    }
    return mayor1 + mayor2
  
}
console.log(SumaArray([100, 166, 200, 33, 42]));
