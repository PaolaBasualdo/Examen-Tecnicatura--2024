/*3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:

Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,  calcule y retorne el perímetro de la misma. El perímetro de una figura geométrica se calcula sumando las longitudes de todos sus lados. Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es una constante (aproximadamente 3.14159) y radio es el radio del círculo.
 (para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .*/

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
            let perimetroT = 3 * lado;
            return `Es un TRIANGULO, su perimetro es ${perimetroT} .`;
            break;
        case 4:
            let perimetroCu = 4 * lado;
            return `Es un CUADRADO, su perimetro es ${perimetroCu} .`;
            break;
        case 5:
            let perimetroP = 5 * lado;
            return `Es un PENTAGONO, su perimetro es ${perimetroP} .`;
            break;
        case 6:
            let perimetroH = 6 * lado;
            return `Es un HEXAGONO, su perimetro es ${perimetroH} .`;
            break;
        default:
            if (numLado<0){
            return "ERROR: Ingresa un numero valido";
            }
            else{
                let perimetroPo = numLado * lado;
                return `Es un Poligono, su perimetro es ${perimetroPo} .`;
            }
            
    }
}
console.log(identificarFigura(6, 5));