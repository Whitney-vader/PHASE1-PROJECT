// Create a function to fetch the data from the server
async function fetchData() {
    try {
      // Fetch the data from the JSON file
      const response = await fetch('products.json');
  
      // If the response is successful, parse the data as JSON
      if (response.ok) {
        const data = await response.json();
  
        // Display the data on the webpage
        displayData(data);
      } else {
        throw new Error('Error fetching data');
      }
    } catch (error) {
      // Log any errors to the console
      console.error(error);
    }
  }
  
  // Create a function to display the data on the webpage
  function displayData(data) {
    const productsContainer = document.querySelector('.products .content');
  
    // Loop through the data and create a new div for each product
    data.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('row');
  
      // Add the product image
      const productImg = document.createElement('div');
      productImg.classList.add('row-img');
      productImg.style.backgroundImage = `url('assets/images/${product.image}')`;
      productDiv.appendChild(productImg);
  
      // Add the product title
      const productTitle = document.createElement('h3');
      productTitle.textContent = product.title;
      productDiv.appendChild(productTitle);
  
      // Add the product stars
      const productStars = document.createElement('div');
      productStars.classList.add('stars');
      for (let i = 0; i < product.stars; i++) {
        const star = document.createElement('a');
        star.href = '#';
        star.innerHTML = '<i class="ri-star-fill"></i>';
        productStars.appendChild(star);
      }
      productDiv.appendChild(productStars);
  
      // Add the product price
      const productPrice = document.createElement('div');
      productPrice.classList.add('right-row');
      const price = document.createElement('h6');
      price.textContent = `ksh${product.price}`;
      productPrice.appendChild(price);
      productDiv.appendChild(productPrice);
  
      // Add the 'Add to cart' button
      const addToCart = document.createElement('div');
      addToCart.classList.add('left-row');
      const cartButton = document.createElement('a');
      cartButton.href = '#';
      cartButton.textContent = 'Add to cart';
      cartButton.innerHTML += '<i class="ri-shopping-cart-fill"></i>';
      addToCart.appendChild(cartButton);
      productDiv.appendChild(addToCart);
  
      // Add the product div to the products container
      productsContainer.appendChild(productDiv);
    });
  }
  
  // Call the fetchData function when the page loads
  window.addEventListener('load', fetchData);