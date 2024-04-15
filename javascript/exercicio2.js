//2. Desconto Funcionário
//Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes VIPs.

//Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o valor total da compra efetuada e um código que identifique se o comprador é um cliente comum [1], funcionário [2] ou VIP [3].

//A saída do programa deve ser o valor total da compra após o processamento e a categoria do desconto aplicado, se houver.

//Dica: para calcular um percentual de um número, faça a operação desconto = valor * percentualDesconto /100

function descontos(clientes) {
    let valor = document.querySelector('#valor').value;

    if (clientes === 'comum'){
           resultado = valor;
    }else if (clientes === "vip"){
        resultado = valor - (valor *0.05);

    }else {
        resultado = valor - (valor *0.1);

    }

    return resultado;
}
       
    
