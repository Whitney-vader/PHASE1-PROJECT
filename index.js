async function fetchData() {
  try {

    const response = await fetch('package.json');

    if (response.ok) {
      const data = await response.json();
      displayData(data);
    } else {
      throw new Error('Error fetching data');
    }

  } catch (error) {
    console.error(error);
  }
}

function displayData(data) {
  const productsContainer = document.querySelector('.products .content');

  data.forEach((product) => {
    const productDiv = document.createElement('div');

    productDiv.classList.add('row');

    const productImg = document.createElement('div');

    productImg.classList.add('row-img');

    productImg.style.backgroundImage = `url('assets/images/${product.image}')`;

    productDiv.appendChild(productImg);

    const productTitle = document.createElement('h3');

    productTitle.textContent = product.title;

    productDiv.appendChild(productTitle);


    const productStars = document.createElement('div');

    productStars.classList.add('stars');
    for (let i = 0; i < product.stars; i++) {
      const star = document.createElement('a');
      star.href = '#';
      star.innerHTML = '<i class="ri-star-fill"></i>';
      productStars.appendChild(star);
    }

    productDiv.appendChild(productStars);


    const productPrice = document.createElement('div');

    productPrice.classList.add('right-row');

    const price = document.createElement('h6');

    price.textContent = `ksh${product.price}`;

    productPrice.appendChild(price);

    productDiv.appendChild(productPrice);


    const addToCart = document.createElement('div');

    addToCart.classList.add('left-row');

    const cartButton = document.createElement('a');

    cartButton.href = '#';

    cartButton.textContent = 'Add to cart';

    cartButton.innerHTML += '<i class="ri-shopping-cart-fill"></i>';

    addToCart.appendChild(cartButton);

    productDiv.appendChild(addToCart);


    productsContainer.appendChild(productDiv);
  });
}


window.addEventListener('load', fetchData);