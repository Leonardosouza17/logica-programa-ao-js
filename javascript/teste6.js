// JSON -> JavaScript Object Notation

const produtos = [
    {
        codigo: 1,
        preco: 5.99,
        descricao: "Salgado"
    },
    {
        codigo: 2,
        preco: 4.50,
        descricao: "Snickers"
    }
];

function calculaDesconto(codigoProduto, qtdeProduto) {

    let preco;
    let descricao;
    let desconto;
    let valorFinal;

    // percorre o vetor de produtos para pesquisa;
    for (let i = 0; i < produtos.length; i++) {

        // se o código for igual ao procurado, obtém o preco;
        if (produtos[i].codigo === codigoProduto) {

            preco = produtos[i].preco;
            descricao = produtos[i].descricao;
        }
    }

        if (qtdeProduto >= 3 && qtdeProduto <= 5) {

            desconto = 0.02;

        } else if (qtdeProduto >= 6 && qtdeProduto <= 10) {

            desconto = 0.03;

        } else if (qtdeProduto > 10) {

            desconto = 0.05;

        } else {

            desconto = 0;
        }

        valorFinal = (preco * qtdeProduto) - (preco * qtdeProduto * desconto);

        return {
            codigo: codigoProduto,
            preco: preco,
            descricao: descricao,
            valorFinal:valorFinal
        };

}


document.querySelector('#btCalcular').addEventListener('click', () => {

    const codigoProduto = Number(document.querySelector('#codigoProduto').value);

    const qtdeProduto = Number(document.querySelector('#qtdeProduto').value);

    const produto = calculaDesconto(codigoProduto, qtdeProduto);

    const pDescricao =  document.createElement('p'); //criando o elemento
    pDescricao.innerHTML = produto.descricao; //atribuindo um valor para o innerHTML
    pDescricao.setAttribute('data-produto' , produto.codigo);

    const pValorFinal = document.createElement('p'); 
    pValorFinal.innerHTML = produto.valorFinal.toFixed(2);
    pValorFinal.classList.add('monetario');


    
    document.querySelector('#resultado').append(pDescricao, pValorFinal);
    document.querySelector('#btlimpar').addEventListener('click', function () {
        document.querySelector('#resultado').innerHTML = "";


});
});
