//Escribir una función que reciba un número y devuelva el factorial de ese número.

function Nfactorial(n) {

    let result=1
    while(n>1){
     result*=n
     n--
     
}
    return result
}
console.log(Nfactorial(5));