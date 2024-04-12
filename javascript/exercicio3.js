//3. Jogo de Futebol
//Desenvolva um programa que receba do usuário o placar de um jogo de futebol (os gols de cada time), e informa se o resultado foi empate, vitória do primeiro time ou vitória do segundo time.

function placar (timeA, timeB, gol1, gol2 ) {

    let mensagem;

    if (timeA > timeB) {
        mensagem = `Palmeiras está ganhando ${gol1} x ${gol2}`;

    } else if (timeB > timeA){
        mensagem = `Flamengo está ganhando ${gol2} x ${gol1}`;

    } else {
        mensagem = `empate de placar ${gol1} x ${gol2}`;
    }

return {

    mensagem: mensagem,
    gol1 :gol1,
    gol2 :gol2
}
}