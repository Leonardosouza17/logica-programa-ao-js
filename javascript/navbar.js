// Ancora do exercício 1

const aHome = criaAncora('../html/index.html', 'Home');

const liHome = document.createElement('li');
liHome.appendChild(aHome);

const aExercicio1 = criaAncora('../html/exercicio1.html' , 'Exercicio 1');

const liExercicio1 = criaLi(aExercicio1);

const aExercicio6 = criaAncora('../html/teste6.html' , 'Exercicio 6');


const liExercicio6 = document.createElement('li');
liExercicio6.appendChild(aExercicio6);

const ulNav = document.createElement('ul')
ulNav.append(liHome, liExercicio1, liExercicio6);

const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav);

const spanLogo = document.createElement('span');
spanLogo.innerHTML = 'Desafios & Exercícios';

const divLogo = document.createElement('div');
divLogo.classList.add('logo');
divLogo.appendChild(spanLogo);



const divMenuLogo = document.createElement('div');
divMenuLogo.classList.add('logo-menu');
divMenuLogo.append(divLogo, nav);

const header = document.createElement('header');
header.appendChild(divMenuLogo);


// document.body.insertBefore(header, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', header);



const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '../style/navbar.css')

document.head.appendChild(linkNavbar);

function criaAncora(url, texto) {

    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto;

    return ancora;

}

// Crie uma função e utilize para gerar os elementos do tipo <li>

function  criaLi(ancora) {

    const li = document.createElement('li');
    li.appendChild(ancora);

    return li;
}