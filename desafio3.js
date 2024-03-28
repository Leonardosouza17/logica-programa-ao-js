// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

//Fórmulas:
//t°F = (t°C * 9/5) + 32
//t°C = (t°F - 32) * 5/9
//tK = 

function converteTemperatura(temperatura, escalaatual, conversao) {


  let msgErro = 'Ok';
  let temperaturaConvertida
  const

    CF = (temperatura * 9 / 5) + 32,
    CK = temperatura + 273.15,
    FC = (temperatura - 32) * 5 / 9,
    FK = (temperatura + 459.67) * 5 / 9,
    KC = temperatura + 273.15,
    KF = temperatura * 9 / 5 - 459.67;




  if (!isNaN(temperatura)) {

    escalaatual = escalaatual.toUppercase();
    conversao = conversao.toUppercase();

    if (escalaatual === "C") {
      if (conversao === "F") {
        temperaturaConvertida = CF;

      } else if (conversao === "K") {
        temperaturaConvertida = CK;

      }

      else if (escalaatual === "F") {
        if (conversao === "C") {
          temperaturaConvertida = FC;

        } else {
          temperaturaConvertida = FK;
        }

      } else {
        if (conversao == "C") {
          temperaturaConvertida = KC;

        } else {

          temperaturaConvertida = KF;

        }

      }



    }
    // retornando em JSON - JavaScript Object Notation
    return {
      temperatura: temperatura,
      escalaatual: escalaatual,
      conversao: conversao,
      temperaturaConvertida: temperaturaConvertida,
      msgErro: msgErro
    };
  }

}