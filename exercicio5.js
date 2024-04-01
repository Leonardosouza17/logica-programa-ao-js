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

function calcularPreco (litros, combustivel, precoUnitario, desconto  ) {
   

    if (combustivel === 'Alcool') {
        precoUnitario = 2.89;
        if (litros = 20) {
            desconto = litros * 0.03;

        }else {
            desconto = litros *0.05;
        }
    }else if (combustivel === 'Gasolina') {
        precoUnitario = 5.19;
        if (litros = 20) {
            desconto = litros * 0.04;

        } else {
            desconto = litros * 0.06;
        }
    } else {
        console.log('Tipo de combustível não reconhecido.') ;

        
    
    }
    return;
     let precoFinal = (precoUnitario * litros) - desconto;
     return precoFinal.toFixed(2); 
}
