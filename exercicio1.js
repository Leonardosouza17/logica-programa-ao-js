
function sobreoTriangulo() {

    const
        ladoA = Number(window.prompt('Valor do lado A:')),
        ladoB = Number(window.prompt('Valor do lado B:')),
        ladoC = Number(window.prompt('Valor do lado C:'));

    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {

        if (ladoA === ladoB && ladoB === ladoC) {
            console.log('É triângulo  Equilátero');//Os lados tem o mesmo tamanho


        } else if ( ladoA === ladoB && ladoB === ladoC && ladoC === ladoA ){
            console.log(' É triângulo  Isósceles');// Dois lados possuem o mesmo tamanho, e o terceiro diferente
        } else {
            console.log('É triângulo  Escaleno'); //Tem lados diferentes
        }

    } else {
        console.log('Esta forma geométrica não é um triângulo');
    }

}