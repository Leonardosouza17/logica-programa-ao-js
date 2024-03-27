
function verificarTriangulo() {

    const
        lado1 = Number(window.prompt('Valor do lado 1:')),
        lado2 = Number(window.prompt('Valor do lado 2:')),
        lado3 = Number(window.prompt('Valor do lado 3:'));

    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {

        if (ladoA == ladoB && ladoB == ladoC) {
            console.log('O triângulo é Equilátero');//Os lados tem o mesmo tamanho


        } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
            console.log('O triângulo é Isósceles');// Dois lados possuem o mesmo tamanho, e o terceiro diferente
        } else {
            console.log('O triângulo é Escaleno'); //Tem lados diferentes
        }

    } else {
        console.log('A forma não é um triângulo');
    }

}