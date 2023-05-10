//Escribir un programa que calcule el factorial de un número.

/*function Factorial(num) {

    let result= 1
   while (num > 1) { 
   result*= num
   num--
   
   }
   return result
   
}*/
//console.log(Factorial(8));

function Nfactorial(n) {

    if (n===0) return 1

    else{ return n * Nfactorial(n-1)}
   
    
}
console.log(Nfactorial(10));