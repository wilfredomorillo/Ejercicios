//Escribir un programa que calcule el mínimo común múltiplo de dos números.

function Mcm(a , b) {

    let result= Math.max(a,b)
while (result % a !==0 || result % b !==0
    ) { result++
    
}
return result
    
} 
 console.log(Mcm( 4 , 6 ))