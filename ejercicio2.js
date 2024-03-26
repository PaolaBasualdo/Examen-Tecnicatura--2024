function correccion() {
    let nota
    do {
        nota = prompt("Ingrese la nota (debe estar entre 1 y 10):");
        

        if (isNaN(nota) || nota < 1 || nota > 10) { 
            console.log("La nota ingresada no es válida. Debe estar entre 1 y 10. Por favor, inténtelo de nuevo.");
        }
    } while (isNaN(nota) || nota < 1 || nota > 10);

    if (nota < 4) {
        return "LIBRE";
    } else if (nota < 7) {
        return "REGULAR";
    } else {
        return "PROMOCIONADO";
    }
}

console.log(correccion()); 

