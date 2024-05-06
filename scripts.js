console.log(document.title);

// document.querySelector('.infocard')


//1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const titulo1 = document.getElementById('gen-1')

titulo1.innerText = 'Generasión 1 Pokimon'

//2. Cambia el color de fondo de la primera generación de Pokimon.

const listagen1 = document.querySelector('.infocard-list')

listagen1.style.background = 'lightblue'

//3. Imprime por consola la URL de la página.

let value_url = document.URL
console.log(value_url)

//4. Imprime por consola el dominio de la página.
let value_domain = document.domain
console.log(value_domain)

//5. Imprime todos los nodos de imagen.

const nodos_img = document.querySelectorAll('.img-fixed')

console.log(nodos_img)


//6. Sustituye el atributo "src" de todas las imágenes por este

const nuevo_src = document.querySelectorAll('img')

nuevo_src.setAttribute('src', 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif')