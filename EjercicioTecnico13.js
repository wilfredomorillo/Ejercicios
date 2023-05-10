//Escribir una función que reciba dos arreglos de números y 
//devuelva un nuevo arreglo con los números que aparecen en ambos arreglos.


function Iguales(arr1, arr2) {

let arreglo=[]


for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) arreglo.push(arr1[i])
        
        
    }
    
}
return arreglo



    
}

console.log(Iguales([1,2,3,4,6,7,8,3,14,] , [15 , 14, 6]));

