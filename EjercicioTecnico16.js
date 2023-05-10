//Escribir una función que reciba un arreglo de números y devuelva la mediana de los números.


function Mediana(arreglo){

 let result= 0

 for (let i = 0; i < arreglo.length; i++) {
    result+= arreglo[i]
    
 }
 return result/2

}
console.log(Mediana([3,5,4,2,6]))