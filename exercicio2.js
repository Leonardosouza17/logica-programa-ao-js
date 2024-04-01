//2. Desconto Funcionário
//Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes VIPs.

//Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum [1], funcionário [2] ou VIP [3].

//A saída do programa deve ser o valor total da compra após o processamento e a categoria do desconto aplicado, se houver.

//Dica: para calcular um percentual de um número, faça a operação desconto = valor * percentualDesconto /100

function  calculadesconto (valorTotal, Cliente ){
    let desconto = 0;
    let niveldeDesconto = ""
    

    if (Cliente === 1) {
        desconto = 0;
        niveldeDesconto = "Cliente comum";

    } else if (Cliente === 2) {
        desconto = valorTotal * 0.1;
        niveldeDesconto = "Funcionário";

    } else if (Cliente === 3) {
        desconto = valorTotal * 0.05;
        niveldeDesconto = "Cliente Vip"

    }else {
        console.log ("Código do cliente é inválido.");

        return;
    }

    let valorFinal = valorTotal - desconto;

       
    
}