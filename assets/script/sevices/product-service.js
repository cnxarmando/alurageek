const url = 'http://localhost:3000/products';

const listProducts = () => {
  return fetch(`${url}`)
  .then(res => res.json() );
}   

const newProduct = (name, image, price, category, description, quantity) => {
  return fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      image,
      price,
      category,
      description,
      quantity
    })
  })
  .then(res => res.json());
}

const detailProduct = (id) => {
  return fetch(`${url}/${id}`)
  .then(res => res.json());
}

const updateProduct = (id, name, image, price, category, description, quantity) => {
  return fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      image,
      price,
      category,
      description,
      quantity
    })
  })
  .then(res => res.json());
}

const removeProduct = (id) => {
  return fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
  .then(res => res.json());
}


export const productServices = {
  listProducts,
  newProduct,
  updateProduct,
  detailProduct,
  removeProduct
};
