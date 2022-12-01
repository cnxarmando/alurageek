import { productServices } from '../sevices/product-service.js';

const newProducts = (name, price, image, category) => {
  const card = document.createElement('div');
  card.classList.add('container__products--item');
  const content = `  
    <img
    class="container__products--image"
    src="${image}"
    alt=""
    />
    <h3 class="container__products--title">${name}</h3>
    
    <p class="container__products--price">R$ ${price}</p>
    <button class="container__products--button" data-view>Ver produto</button>
    `;
  card.innerHTML += content;
  return card;
};

let list = '';
let listaArray = [];

const starwarsProducts = document.querySelector('[data-starwars]');
const consoleProducts = document.querySelector('[data-console]');
const severalProducts = document.querySelector('[data-several]');
const contentProducts = document.querySelector('[data-products]');

const render = async () => {
  const listProduct = await productServices.listProducts();
  listProduct.forEach(element => {
    list = [element.name, element.price, element.image, element.category];

    listaArray.push(list);

    validaCaminho(element);

    // validaCategoriaRender(element);
  });
  console.log(listaArray.filter(element => element[3] === 'star-wars'));
  console.log(listaArray.filter(element => element[3] === 'console'));
  console.log(listaArray.filter(element => element[3] === 'several'));
};

render();

const elementos = element => {

};

const validaCategoriaRender = element => {
  const href = window.location.pathname;
  if (element.category === 'star-wars' && href === '/index.html') {
    starwarsProducts.appendChild(
      newProducts(element.name, element.price, element.image, element.category),
      console.log(element.category === 'star-wars')
    );
  } else if (element.category === 'console') {
    consoleProducts.appendChild(
      newProducts(element.name, element.price, element.image, element.category),
      console.log(element.category === 'console')
    );
  } else if (element.category === 'several') {
    severalProducts.appendChild(
      newProducts(element.name, element.price, element.image, element.category),
      console.log(element.category === 'several'),
    );
  } else if (href === '/content/store.html') {
    contentProducts.appendChild(
      newProducts(element.name, element.price, element.image, element.category),
    );
  }
};

function validaCaminho(element) {
  const href = window.location.pathname;
  if (href === '/index.html') {
    validaCategoriaRender(element);
  } else if (href === '/content/store.html') {
    validaCategoriaRender(element);
  }
}

// const url = new URL(href);


