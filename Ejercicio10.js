//Escribir un programa que calcule el máximo común divisor de dos números.

function Mcd(a,b) {
    if (b===0){
        return a
    }else{
        return Mcd(b, a%b)
    }

    
}
console.log(Mcd(12,18))
