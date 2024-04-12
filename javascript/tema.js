document.querySelector('#btTrocaTema').addEventListener('click',
    function trocaTema() {
        // pegar o elemento com o tema
        // se o tema for light, então mude o atributo para dark
        // se não for, então mude o atributo para light
        if (document.documentElement.getAttribute('data-tema') ===
            'light') {
            document.documentElement.setAttribute('data-tema', 'dark');
        } else {
            document.documentElement.setAttribute('data-tema', 'light');
        }
    });