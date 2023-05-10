//Escribir una función que reciba un arreglo de strings y un string, 
//y devuelva true si el string está presente en el arreglo, y false si no lo está.




function VerificaStrind(Array, string) {


    for (let i = 0; i < Array.length; i++){
      if (Array[i]=== string) return true

       
    }
    return false


    
}
console.log(VerificaStrind(['hola','quehce','totonita'], 'hola'));
