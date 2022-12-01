import { productServices } from "../sevices/product-service.js";

const newProducts = (name, price, image, category) => {
  const card = document.createElement("div");
  card.classList.add("container__products--item");
  const content = `
    <img
    class="container__products--image"
    src=".${image}"
    alt=""
    />
    <h3 class="container__products--title">${name}</h3>
    
    <p class="container__products--price">R$ ${price}</p>
    <button class="container__products--button" data-view>Ver produto</button>
    `;
  card.innerHTML += content;
  return card;
};

const contentProducts = document.querySelector('[data-products]');

const render = async () => {
  const listProduct = await productServices.listProducts();
  listProduct.forEach(element => {
    contentProducts.appendChild(newProducts(element.name, element.price, element.image, element.category));
  });
};  

render();