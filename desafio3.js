// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

//Fórmulas:
//t°F = (t°C * 9/5) + 32
//t°C = (t°F - 32) * 5/9
//tK = 

const valortemperatura = window.prompt('digita a temperatura'),
      unidadetemperatura = window.prompt('informe a unidade de temperatura que deseja converter'),
      conversao = window.prompt('informe para qual escala você deseja converter'),
      
      tC =,
      tF =,
      tK =,
      Celsiusfahrenheit = tF = (tC * 9/5) + 32,
      Celsiuskelvin = tK = tC + 273.15,
      Fahrenheitcelsius = tC = (tF - 32) * 5/9,
      Fahrenheitkelvin = tK = (tF + 459.67) * 5/9,
      kelvincelsius = tC = tK + 273.15,
      kelvinfahrenheit = tF = tK * 9/5 - 459.67

      if ( tF = tC * 9/5 + 32) {
        window.alert
      } else if (tK ) {

      }
