// Crie um conversor de temperatura entre as escalas Celsius, Fahrenheit e Kelvin. O usuário deve digitar a temperatura a ser convertida, a escala da temperatura atual e a escala para o qual o valor deve ser convertido.

//Entradas (3): valor atual da temperatura, escala atual da temperatura, escala para exibição (conversão).

//Fórmulas:
//t°F = (t°C * 9/5) + 32
//t°C = (t°F - 32) * 5/9
//tK = 

const temperatura = window.prompt('digite a temperatura'),
      atual = window.prompt('informe a unidade de temperatura atual para converter'),
      conversao = window.prompt('informe para qual escala você deseja converter');
      
      const 
      CF = (temperatura * 9/5) + 32,
      CK = temperatura + 273.15,
      FC = (temperatura - 32) * 5/9,
      FK = (temperatura + 459.67) * 5/9,
      KC = temperatura + 273.15,
      KF = temperatura * 9/5 - 459.67;

      if  ( atual == "C" ||  "c" && conversao == "F" ||  "f"){ 
        window.alert (`temperatura = ${CF} `); 
        }
        else if ( atual == "C" ||  "c" && conversao == "K" || "k" ){ 
          window.alert (`temperatura = ${CK}`);
      }
        else if ( atual == "F" ||  "f" && conversao == "C" ||  "c"){
           window.alert (`temperatura = ${FC}`);
        }
        else if ( atual == "F" ||  "f" && conversao == "K" ||  "k"){
          window.alert (`temperatura = ${FK}`);
        }
        else if (atual == "K" ||  "k" && conversao == "C" ||  "c"){
          window.alert (`temperatura = ${KC}`);
        }
        else if ( atual == "K" ||  "k" && conversao == "F" ||  "f" ){
          window.alert (`temperatura = ${KF}`);
        }
        else {
          window.alert (` Temperatura não reconhecida`);
        }
    