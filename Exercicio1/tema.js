document.querySelector('#btTrocaTema').addEventListener('click', function trocaTema() {
    
    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');

    } else {
        document.documentElement.setAttribute('data-tema', 'light');
    }
});