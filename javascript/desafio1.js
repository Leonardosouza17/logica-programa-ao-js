// Escreva umcódigo em JavaScript que resolva o problema descrito no livro Lógica de Programação I, p. , em que temos que obter a nota de 3 alunos, calcular a média e exibir se o aluno foi aprovado, reprovado ou se ficou para exame. não é necessário ler as notas, você pode defini-las com variáveis.

//você precisará utilizar uma estrutura de decisão composta,como a seguir:


const  nota1 = 7, nota2 = 5, nota3 = 4;
const media = (nota1 + nota2 + nota3) /3;



if ( media >= 7) {
    console.log(`aprovado com nota ${media.toFixed(2)}`);
   
} else if (media >= 5) {
    console.log(`exame com nota ${media.toFixed(2)}`);
    
} else  {
    console.log(`reprovado com nota ${media.toFixed(2)}`);
    
}