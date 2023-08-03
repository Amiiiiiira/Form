// function logCredentials(event) {
//   event.preventDefault()
//   console.log($('#inputUsername').val());
//   console.log($('#inputPassword').val());
// }
//   $('#button').on('click', logCredentials);



// function fetchData(event) {
//   event.preventDefault();
//   fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(data => createProductCards(data))
// }

const api_url = "https://dummyjson.com/products";

async function fetchProductData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    createProductCards(data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

function createProductCards(products) {
  for (let index = 0; index < products.length; index++) {
    $('.wrapper').append(`
      <div class="product-card bg-neutral-200 border-black border-2 text-black w-80 rounded m-5 p-4">
        <img class="product-image" src="${products[index].images[0]}">
        <h4 class="product-name text-xl">${products[index].title}</h4>
        <p class="product-description">${products[index].description}</p>
        <p class="product-price">${products[index].price}</p>
        <button id="product-button" class="bg-violet-950 text-white rounded p-2 mt-2">Add to Cart</button>
      </div>
    `);
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  fetchProductData('https://dummyjson.com/products');
});

