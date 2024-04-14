//6. Produtos com desconto
//Desenvolva um programa que calcule o desconto da compra de produtos baseado na quantidade de produtos comprados.

//O programa deve ler o código do produto e a quantidade adquirida. Você pode utilizar uma estrutura de dados JSON para armazenar as informações dos produtos.

//Quantidade	Desconto
//3 até 5	2%
//6 a 10	3%
//mais que 10	5%

const produtos = {
    "produto1": { "nome": "Produto 1", "preco": 10 },
    "produto2": { "nome": "Produto 2", "preco": 20 },

};

function calcularDesconto() {

    const codigo = document.getElementById("codigo").value;
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const produto = produtos[codigo];

    if (!produto) {
        document.getElementById("resultado").innerText = "Produto não encontrado.";
        return;
    }

    let desconto = 0;
    if (quantidade >= 3 | quantidade <= 5) {
        desconto = 0.02;

    } else if (quantidade >= 6 && quantidade <= 10) {
        desconto = 0.03;

    } else if (quantidade > 10) {
        desconto = 0.05;
    }

    const valorDesconto = produto.preco * quantidade * desconto;
    const totalComDesconto = produto.preco * quantidade - valorDesconto;

    document.getElementById("resultado").innerText = `Nome do Produto: ${produto.nome}\nPreço Unitário: R$ ${produto.preco}\nQuantidade: ${quantidade}\nDesconto Aplicado: ${desconto * 100}%\nValor do Desconto: R$ ${valorDesconto.toFixed(2)}\nTotal com Desconto: R$ ${totalComDesconto.toFixed(2)}`;
}