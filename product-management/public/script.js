document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
  
    // Fetch products from the server
    fetch('http://localhost:3008/products')
      .then(response => response.json())
      .then(products => {
        products.forEach(product => addProductToDOM(product));
      });
  
    // Add product
    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('product-name').value;
      const price = document.getElementById('product-price').value;
  
      const product = { name, price };
  
      fetch('http://localhost:3008/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      .then(response => response.json())
      .then(product => {
        addProductToDOM(product);
        productForm.reset();
      });
    });
  
    // Delete product
    productList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        fetch(`http://localhost:3008/products/${id}`, {
          method: 'DELETE'
        })
        .then(() => {
          e.target.parentElement.remove();
        });
      }
    });
  
    function addProductToDOM(product) {
      const li = document.createElement('li');
      li.dataset.id = product.id;
      li.innerHTML = `${product.name} - $${product.price} <button class="delete">Delete</button>`;
      productList.appendChild(li);
    }
  });
  