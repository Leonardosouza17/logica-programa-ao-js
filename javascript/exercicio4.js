//4. Busca de um nome
//Desenvolva um programa que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor. Após isso, o programa deve pertmitir a leitura de mais um nome qualquer para ser efetuada uma busca entre os nomes inseridos anteriormente. O programa deve exibir a mensagem ACHEI caso encontre o nome e NÃO ACHEI caso não encontre o nome.


let nomes = []; // array vazio chamado "nomes"

        document.addEventListener('keydown', (evento) => {

            if (evento.key === 'Enter') {

                evento.preventDefault();

                if (nomes.length < 10) {

                    document.querySelector('#btCadastrar').click();

                } else {

                    document.querySelector('#btPesquisar').click();
                }
            }
        });


        document.querySelector('#btCadastrar').addEventListener('click', () => {

            nomes.push(document.querySelector('#nome').value);

            // Ao atingir 10 nomes
            if (nomes.length === 10) {

                //troque a label do input "nome"
                document.querySelector('label[for="nome"]').innerHTML = 'Nome para pesquisar:';
                

                // oculte o botão cadastrar
                document.querySelector('#btCadastrar').classList.add('oculto');

                // desoculte o botão pesquisar
                document.querySelector('#btPesquisar').classList.remove('oculto');
            }





        });

        document.querySelector('#btPesquisar').addEventListener('click', () => {

            const nomeBuscado = document.querySelector('#nome').value;

            if (nomes.includes(nomeBuscado)) {

                document.querySelector('#resultado').innerHTML = `ACHEI na posição ${nomes.indexOf(nomeBuscado)}, ${nomes[nomes.indexOf(nomeBuscado)]}`;

            } else {

                document.querySelector('#resultado').innerHTML = 'NÃO ACHEI';
            }

        });
