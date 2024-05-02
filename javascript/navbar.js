// Ancora do exercício 1

const aHome = document.createElement('a');
aHome.setAttribute('href', '../html/index.html');
aHome.innerHTML = 'Home';

const liHome = document.createElement('li');
liHome.appendChild(aHome);


const aExercicio1 = document.createElement('a');
aExercicio1.setAttribute('href', '../html/exercicio1.html');
aExercicio1.innerHTML = 'Exerc.1';

// document.body.append(aExercicio1);


const liExercicio1 = document.createElement('li');
liExercicio1.appendChild(aExercicio1);

const aExercicio6 = document.createElement('a');
aExercicio6.setAttribute('href', '../html/teste6.html');
aExercicio6.innerHTML = 'Exerc.6';

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
divMenuLogo.appendChild(divLogo, nav);

const header = document.createElement('header');
header.appendChild(divMenuLogo);


document.body.insertBefore(header, document.body.firstChild);
// document.body.insertAdjacentElement('afterbegin', nav);



const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '../style/navbar.css')

document.head.appendChild(linkNavbar);