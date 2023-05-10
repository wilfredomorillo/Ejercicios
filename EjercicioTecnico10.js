//Escribir una función que reciba un arreglo de números y 
//devuelva true si los números están ordenados de menor a mayor, y false si no lo están.


function MenorMayor(arreglo) {
 
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i]>arreglo[i+1]) return false
        
    }
    return true
}
console.log(MenorMayor([1,2,3,4,5,6,7,10,]));
