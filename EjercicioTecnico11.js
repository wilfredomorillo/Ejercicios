//Escribir una función que reciba un número y 
//devuelva la suma de todos los números pares desde 1 hasta ese número.



function NPares(n) {

    let result= 0
for (let i = 1; i < n; i++) {
if (i % 2===0) result+= i
    
}   
return result
}
console.log(NPares(7));