// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

//Fórmulas:
//t°F = (t°C * 9/5) + 32
//t°C = (t°F - 32) * 5/9
//tK = 

function converteTemperatura(temperaturaAtual, escalaAtual, escalaConversao) {
  let temperaturaConvertida, msgErro = 'Ok';

  if(!isNaN(temperaturaAtual)) {
    escalaAtual = escalaAtual.toUpperCase();
    escalaConversao = escalaConversao.toUppercase();

    if (escalaAtual === 'C') {

      if (escalaConversao === 'K') {
        temperaturaConvertida = temperaturaAtual + 273.15;

      } else if (escalaConversao === 'F') {
        temperaturaConvertida = (temperaturaAtual * 9 / 5) + 32;

      } else if (escalaConversao === 'C') {
        msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;

      } else {  msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`; 

      } 
      
       } else if (escalaAtual === 'F') {

          if (escalaConversao === 'K') {
             temperaturaConvertida = (temperaturaAtual + 459.67) * 5 / 9;
  
          } else if (escalaConversao === 'C') {
            temperaturaConvertida= (temperaturaAtual - 32) * 5 / 9;
  
          } else if (escalaConversao === 'F') {
            msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
  
          } else {
            msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
  
          }
      } else if (escalaAtual === 'K') {
          
        if (escalaConversao === 'C') {
          temperaturaConvertida = temperaturaAtual - 273.15;

        } else if (escalaConversao === 'F') {
          temperaturaConvertida = temperaturaAtual * 9 / 5 - 459.67;

        } else if (escalaConversao === 'K') {
          msgErro `ERRO: Escala selecionada: ${escalaConversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
  
        } else {
          msgErro = `ERRO: Escala selecionada: ${escalaConversao}. Essa escala não existe ou não está disponível neste programa.`;
        }

        } else {
          msgErro = `ERRO: Escala ATUAL selecionada: ${escalaAtual}. A escala ATUAL não existe ou não está disponível neste programa.`;

        }

        } else {
          msgErro = 'ERRO: O número digitado para conversão não é um número válido.';
        }

        // retornando em JSON JavaScript Object Notation
         return {
          temperaturaAtual: temperaturaAtual,
        escalaAtual: escalaAtual,
        escalaConversao: escalaConversao,
        temperaturaConvertida: temperaturaConvertida,
        msgErro: msgErro

         }
        }

        



 