/*
 Crear una función que reciba como parámetro una nota y retorne una de 
estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

Nota es menor a 4 - LIBRE
Nota es menor a 7 y no es LIBRE - REGULAR 
Nota mayor que 6  - PROMOCIONADO.*/

function correccion(nota) {
    if (nota < 4) {
        return "LIBRE";
    } else if (nota < 7) {
        return "REGULAR";
    } else {
        return "PROMOCIONADO";
    }
}
console.log(correccion(9));