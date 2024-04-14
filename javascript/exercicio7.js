//7. Taxa de Natalidade e Mortalidade
//Desenvolva um programa que calcule esses indicadores, obtendo, para isso, o número de habitantes, o número de nascimentos e o número de óbitos de uma determinada população.

//taxa de natalidade: número de nascimentos x 1000 / número de habitantes
//taxa de mortalidade: número de óbitos x 1000 / número de habitantes
//O usuário deve optar entre [N] Taxa de Natalidade e [M] Taxa de Mortalidade. O resultado exibido deve estar de acordo com a opção selecionada.


function calcularTaxa() {

    const habitantes = parseInt(document.getElementById("habitantes").value);
    const nascimentos = parseInt(document.getElementById("nascimentos").value);
    const obitos = parseInt(document.getElementById("obitos").value);
    const opcao = document.getElementById("opcao").value;

    let resultado = 0;

    if (opcao === "N") {
        resultado = (nascimentos * 1000) / habitantes;
        document.getElementById("resultado").innerText = `Taxa de Natalidade: ${resultado.toFixed(2)} nascimentos por 1000 habitantes.`;

    } else if (opcao === "M") {
        resultado = (obitos * 1000) / habitantes;
        document.getElementById("resultado").innerText = `Taxa de Mortalidade: ${resultado.toFixed(2)} óbitos por 1000 habitantes.`;

    } else {
        document.getElementById("resultado").innerText = "Opção inválida.";
    }
}