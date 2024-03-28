/*1- Resolver el problema utilizando javascript, para identificar una figura geométrica:

Teniendo una variable numérica que representa el número de lados de una figura geométrica, mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

Círculo: si el número de lados es 0.
Triángulo: si el número de lados es 3.
Cuadrado: si el número de lados es 4.
Pentágono: si el número de lados es 5.
Hexágono: si el número de lados es 6.
Polígono: si el número de lados es mayor que 6.
Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.*/
function identificarFigura(numLado){
    switch (numLado) {
        case 0:
            return "Circulo";
            break;
        case 1:
            return "No es una figura";
            break;
        case 2:
            return "No es una figura";
            break;
        case 3:
            return "Triangulo";
            break;
        case 4:
            return "Cuadrado";
            break;
        case 5:
            return "Pentagono";
            break;
        case 6:
            return "Hexagono";
            break;
        default:
            if (numLado<0){
            return "ERROR: Ingresa un numero valido";
            }
            else{
                return "Poligono";
            }
            
    }
}
console.log(identificarFigura(-1));