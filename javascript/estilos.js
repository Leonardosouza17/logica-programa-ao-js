const links = [
    { "rel": "stylesheet", "href": "/style/reset.css"},
    { "rel": "stylesheet", "href": "/style/style.css"},
    { "rel": "stylesheet", "href":"/style/responsividade.css" }
];

links.forEach(link => {
    const l = document.createElement('link');
    l.rel = link.rel;
    l.href = link.href;
    document.head.appendChild(l); 
});