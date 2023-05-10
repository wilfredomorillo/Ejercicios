//Escribir una función que reciba una cadena y 
//devuelva un objeto con la cantidad de veces que aparece cada letra en la cadena.

function CadenaString(cadena) {

    let result={}

    for (let i = 0; i < cadena.length; i++) {
        let letra= cadena[i]
        if(result[letra]){
        result[letra]++ }
        else {
        result[letra]=1
        }
    }
    return result
    
}
console.log(CadenaString('hola mundo como esta o q hace'));

