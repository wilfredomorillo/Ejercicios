//Escribir una función que reciba un arreglo de objetos y un objeto, y 
//devuelva true si el objeto está presente en el arreglo, y false si no lo está.


function Comparar(Array, obj) {

    for (let i = 0; i < Array.length; i++) {
        if (JSON.stringify(Array[i])===JSON.stringify(obj) ) return true
        
    }
return false

    
}
 console.log(Comparar([{a: 1, b: 2}, {c: 3, d: 4}], {c: 3, d: 4}));





