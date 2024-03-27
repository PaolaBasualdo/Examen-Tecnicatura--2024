function correccion(nota1, nota2, nota3) {
    
    let promedio = (nota1 + nota2 + nota3) / 3;

    
    if (promedio < 1 || promedio > 10 || isNaN(promedio)) {
        return "Promedio inválido. Asegúrese de que todas las notas estén entre 1 y 10.";
    }

    
    if (promedio < 4) {
        return "LIBRE";
    } else if (promedio < 7) {
        return "REGULAR";
    } else {
        return "PROMOCIONADO";
    }
}


console.log(correccion(7, 8, 9)); 