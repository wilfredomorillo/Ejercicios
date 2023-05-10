//Escribir una función que reciba un objeto y un string, y 
//devuelva true si el objeto tiene una propiedad que coincide con el string, y 
//false si no lo tiene.

function coincide(obj , string) {

    for (const propiedad in obj) {
        if (propiedad === string) { return true
            
        }
    }
    return false
    
}
let myObj = {a: 1, b: 2};
console.log(coincide(myObj, 'a')); // true
console.log(coincide(myObj, 'c')); // false

