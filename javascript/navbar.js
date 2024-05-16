// Ancora do exercício 1

const ancoras = [ 
    { "url": "/index.html", "texto": "Home" },
{ "url": "../html/exercicio1.html", "texto": "Exerc. 1" },
{ "url": "../html/exercicio2.html", "texto": "Exerc. 2" },
{ "url": "../html/exercicio3.html", "texto": "Exerc. 3" },
{ "url": "../html/exercicio4.html", "texto": "Exerc. 4" },
{ "url": "../html/exercicio5.html", "texto": "Exerc. 5" },
{ "url": "../html/teste6.html", "texto": "Exerc. 6" },
{ "url": "../html/exercicio7.html", "texto": "Exerc. 7" }
];

function criaAncora(url, texto) {

    const ancora = document.createElement('a');
    ancora.setAttribute('href', url);
    ancora.innerHTML = texto;

    return ancora;

}


function criaLi(ancora) {

    const li = document.createElement('li');
    li.appendChild(ancora);

    return li;
}

function criaUlNav(ancoras) {

    const ul = document.createElement('ul');

    ancoras.forEach(ancora => {
        const a = criaAncora(ancora.url, ancora.texto);
        const li = criaLi(a);
        ul.appendChild(li);
    });

    return ul;


}

// const aHome = criaAncora('../html/index.html', 'Home');

// const liHome = document.createElement('li');
// liHome.appendChild(aHome);

// const aExercicio1 = criaAncora('../html/exercicio1.html', 'Exercicio 1');

// const liExercicio1 = criaLi(aExercicio1);



// const aExercicio6 = criaAncora('../html/teste6.html', 'Exercicio 6');

// const liExercicio6 = document.createElement('li');
// liExercicio6.appendChild(aExercicio6);

// const ulNav = document.createElement('ul')
// ulNav.append(liHome, liExercicio1, liExercicio6, liExercicio5);

const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(criaUlNav(ancoras));

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

document.querySelector('[href="/style/responsividade.css"]').insertAdjacentElement('beforebegin', linkNavbar);

