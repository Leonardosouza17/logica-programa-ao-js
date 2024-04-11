
function triangulo (ladoA, ladoB, ladoC) {

    let mensagem;

    if ((ladoA === ladoB) && (ladoB === ladoC)) {
        mensagem = 'Como todos os lados são iguais, o triângulo é equilátero.'

    } else if ((ladoA === ladoB) || (ladoB === ladoC)) {
        mensagem = 'Se dois lados são iguais e apenas um lado é diferente, o triângulo é isóceles'

    } else {
        mensagem = 'Se todos os lados são diferentes, o triângulo é escaleno'

    }
        return {
        mensagem: mensagem,
        
    };
    // ?? => operador de coalescência
};


