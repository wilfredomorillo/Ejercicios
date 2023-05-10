//Escribir una función que reciba un número y 
//devuelva true si es primo, y false si no lo es.

function Primo(n) {

    if ( n===1 ) return false
for (let i = 2; i < n; i++) {
    if(n % i===0) return false
    
} 
return true
    
}
console.log(Primo(23));


