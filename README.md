# logica-programacao-js
Treinando a lógica de programação com JavaScript

## operadores-aritmeticos.js

~~~js
const numero1 = 40;
const numero2 = 20;
~~~

A palavra **const** é utilizada para declaração de variáveis que não ser reatribuídas (não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir.

~~~js
console.log(`Os números das operações são ${numero1} e ${numero2}`);
console.log(`A soma dos números é ${numero1 + numero2}`);
console.log(`A subtração dos números é ${numero1 - numero2}`);
console.log(`A multiplicação dos números é ${numero1 * numero2}`);
console.log(`A divisão dos números é ${numero1 / numero2}`);
console.log(`O resto da divisão dos números é ${numero1 % numero2}`);
~~~

Em cada uma das operações, temos um operador aritmético:

* `+` -> soma
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto da divisão
* `**`-> potenciação

## operadores-atribuicoes.js

~~~js
let numero= 10;
~~~

Declaramos a variável `numero` usando a palavra `let`, pois essa variável será **reatribuída** ao longo do  nosso código.

Em seguida, fazemos uma série de reatribuições usando os operadores de atribuição.

~~~js
console.log(`O número é inicialmente: ${numero}`);
console.log(`Após atribuir somando o número 10: ${numero += 10}`);
console.log(`Reatribuindo e subtraindo 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando 10: ${numero *= 10}`);
console.log(`Reatribuindo e  dividindo 10: ${numero /= 10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero %= 10}`)
console.log(`Incrementando o número em 1: ${++ numero}`)
console.log(`Decrementando o número em 1: ${-- numero}`)
console.log(`O número final é igual a ${numero}`);
~~~

Operadores de atribuição:

* `+=` -> reatribuição com soma
* `-=` -> reatribuição com subtração
* `*=` -> atribuição com multiplicação
* `/=` -> atribuição com divisão
* `%=` -> atribuição com resto da divisão
* `++` -> atribuição com **incremento** (pode ser *pré* ou *pós* incrementado). Ex: `numero++` (pós-incremento) ou `++numero` (pré-incremento).
* `--` -> atribuição com **decremento** (pode ser *pré* ou *pós* decrementado). Ex: `numero--`(pós-decremento) ou `--numero` (pré-decremento).

## operadores-comparacao.js

Esta estrutura exibe no console se a condição testada é `true` (verdadeira) ou `false` (falsa). A condição armazena o resultado da **comparação entre duas variáveis**, como segue



~~~js 
const a = 'a', b = 'A';
const condicao = a == b;
~~~


Neste arquivo conhecemos os operadores de comparação e a estrutura lógica de decisão **if-else**.

~~~js
Estrutura IF-ELSE

if (condicao) { 
    console.log('VERDADEIRO');
} else {
    console.log('FALSO');
}
~~~

Usamos **TRUE** e **FALSE**

*true* -> palavra reservada para o valor "verdadeiro"

*false*  -> palavra reservada para o valor "falso"



## operadores de comparação:

 == -> é igual

 === -> é estritamente igual (valor e tipo)

 != -> não é igual

 == -> não é estritamente igual (valor ou tipo)

 > maior que

 < menor que

 >= maior OU igual

 <= menor OU igual


 ## operadores lógicos:












 ## desafio 1:
 const  nota1 = 7, nota2 = 5, nota3 = 4;
const media = (nota1 + nota2 + nota3) /3;



if ( media >= 7) {
    console.log(`aprovado com nota ${media.toFixed(2)}`);
   
} else if (media >= 5) {
    console.log(`exame com nota ${media.toFixed(2)}`);
    
} else  {
    console.log(`reprovado com nota ${media.toFixed(2)}`);
    
}


## desafio 2:

const 
      inf = window.alert('Essa calculadora que está sendo apresentada para você fazer o calculo do seu IMC,não possuí fixação de gênero ou idade,funciona para todos os casos. Mesmo descobrindo se o seu peso está ideal ou não,o médico,nutricionista e um especialista deverá ser consultado,para que esclareça tudo sobre a sua saúde em geral. '),
      altura =  window.prompt('digite sua altura'),
      peso = window.prompt('digite seu peso'), 
      imc = peso / (altura **2);

      
if ( imc <= 18.5 ) {
        window.alert(` Abaixo do peso ${imc.toFixed(2)}`);

} else if (imc <= 24.9 ){
    window.alert(`Peso normal ${imc.toFixed(2)}`);

} else if (imc <= 29.9) {
    window.alert(`Sobrepeso ${imc.toFixed(2)}`);

} else if (imc <= 34.9) {
    window.alert(`Obesidade grau I ${imc.toFixed(2)}`);

} else  if (imc <= 39.9) {
    window.alert( `Obesidade grau II ${imc.toFixed(2)}`);

} else  {
    window.alert(`Obesidade grau III ${imc.toFixed(2)}`);
}

##desafio 3:

