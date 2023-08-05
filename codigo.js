//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

let card = document.querySelector('#tarjeta');
card.classList.add('card')


//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

let imagen = document.querySelector("#logo");
imagen.setAttribute('scr', 'https://www.youtube.com/img/desktop/yt_1200.png');

//3- Quitarle al titulo la clase que le está dando un formato feo

let tituloFeo = document.querySelector('.titulo-feo');
tituloFeo.removeAttribute('class');

//4- Chequear si el link a youtube posee o no el atributo href

let linkYoutube = document.querySelector('#link_youtube');

let tieneHref = linkYoutube.hasAttribute('href');
console.log(tieneHref);


//5- Obtener el href del link a wikipedia y mostrarlo por consola

let linkWikipedia = document.querySelector('#link_wikipedia');

let obtenerLink = linkWikipedia.getAttribute('href');
console.log(obtenerLink);