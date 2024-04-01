//3. Jogo de Futebol
//Desenvolva um programa que receba do usuário o placar de um jogo de futebol (os gols de cada time), e informa se o resultado foi empate, vitória do primeiro time ou vitória do segundo time.

function placar (timeA, timeB,) {

    let mensagem;

    if (timeA > timeB) {
        mensagem = 'Palmeiras está ganhando '

    } else if (timeB > timeA){
        mensagem = 'Flamengo está ganhando'

    } else {
        mensagem = 'empate de placar'
    }

return {

    mensagem: mensagem
}
}