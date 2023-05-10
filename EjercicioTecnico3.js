//Escribir una función que reciba un arreglo de strings y 
//devuelva la cadena más larga.

function StringMasLarga(Array) {

    let string=''
for (let i = 0; i < Array.length; i++) {
 if (Array[i].length>string.length) string= Array[i]
    
}
return string


}
console.log(StringMasLarga(['hola','quehace','totonacio','javascript']))