function calcularPerimetro(numLado, lado){
    if (isNaN(lado) || lado <= 0) {
        return "ERROR: Ingresa un valor válido para el lado.";
    }
    let perimetro =numLado*lado
    return perimetro
}

function identificarFigura(numLado, lado){
    switch (numLado) {
        case 0:
            let perimetroC = 2 * Math.PI * lado;
            return `Es un CIRCULO, su perimetro es ${perimetroC} .`;
            break;
        case 1:
            return "No es una figura";
            break;
        case 2:
            return "No es una figura";
            break;
        case 3:
            
            return `Es un TRIANGULO, su perimetro es ${calcularPerimetro(numLado, lado)} .`;
            break;
        case 4:
            
            return `Es un CUADRADO, su perimetro es ${calcularPerimetro(numLado, lado)} .`;
            break;
        case 5:
            
            return `Es un PENTAGONO, su perimetro es ${calcularPerimetro(numLado, lado)} .`;
            break;
        case 6:
           
            return `Es un HEXAGONO, su perimetro es ${calcularPerimetro(numLado, lado)} .`;
            break;
        default:
            if (numLado<0){
            return "ERROR: Ingresa un numero de lado valido";
            }
            else{
                
                return `Es un Poligono, su perimetro es ${calcularPerimetro(numLado, lado)} .`;
            }
            
    }
}
console.log(identificarFigura(5, -5));
