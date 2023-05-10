//Escribir una función que reciba un objeto con propiedades numéricas y 
//devuelva la suma de todas las propiedades.


function Numeros(obj) {

  let result=0
  for (let propiedad in obj) {
    if (typeof obj[propiedad]=== 'number') {
        
        result= result+obj[propiedad]
    }
  }

    return result
}

console.log(Numeros({ a: 1, b: 2, c: 3, d:0 }));