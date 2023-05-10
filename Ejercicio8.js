//Escribir un programa que muestre la hora actual.

function Time(){
    // Date es un obj de javascript y toLocaTimeString es una propiedad
    const fecha = new Date().toLocaleTimeString('en-US'); 
    var now = fecha 
    return now
}
console.log(Time())