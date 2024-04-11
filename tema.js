document.querySelector('#tema-escuro').addEventListener('click', function trocaTema() {
    
    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');

    }
});

document.querySelector('#tema-claro').addEventListener('click', function trocaTema() {
    
    if (document.documentElement.getAttribute('data-tema') === 'dark') {
        document.documentElement.setAttribute('data-tema', 'light');

    }
});

