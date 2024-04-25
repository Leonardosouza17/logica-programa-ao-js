//5. Posto de Gasolina
//Um posto está vendendo combustíveis com a seguinte tabela de desconto:

//Álcool:
//até 20 litros, desconto de 3% por litro
//acima de 20 litros, desconto de 5% por litro
//Gasolina:
//até 20 litros, desconto de 4% por litro
//acima de 20 litros, desconto de 6% por litro
//Escreva um programa que leia o número de litros vendidos e o tipo de compustível (codificado da seguinte forma: [A] Álcool, [G] Gasolina) e calcule e imprima o valor a ser pago pelo cliente.

//Utilize a tabela de preços:

//Álcool: R$ 2,89
//Gasolina: R$ 5,19

function calculacomb() {

    let litros = document.getElementById('litros').value;
    let combustivel = document.getElementById('combustivel').value;
    let preco;
    let desconto;

    if (combustivel === 'A') {

        if (litros < 21) {
            desconto = 0.03;

        } else {
            desconto = 0.05;
        }
        preco = 2.89;

    } else if (combustivel === 'G') {

        if (litros < 21) {
            desconto = 0.04;

        } else {
            desconto = 0.06;
        }
        preco = 5.19;

    } else {

        document.getElementById('resultado').innerText = " Tipo de combustível inválido";

        return;
    }

    let valordeDesconto = preco * litros * (1 - desconto);

    document.getElementById('resultado').innerText = "Valor a ser pago : R$" + valordeDesconto.toFixed(2);
    document.getElementById('limparesultado').addEventListener('click', () => {

        document.getElementById('resultado').innerText = '';

    });
}
