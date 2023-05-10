//Escribir una función que reciba un arreglo de números y 
//devuelva un nuevo arreglo con el cuadrado de cada número.



function ArrayAlCuadrado(arreglo) {

let Arreglo= []

for (let i = 0; i < arreglo.length; i++) {
    Arreglo.push(arreglo[i]*arreglo[i])
    
}
return Arreglo

    
}
console.log(ArrayAlCuadrado([2,8,7,6,15,]));