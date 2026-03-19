if (cart.length === 0) {
  container.innerHTML = "<h2>Your cart is empty</h2>";
} else {
  cart.forEach(item => {
    container.innerHTML += `
      <p>
        ${item.name} - $${item.price} × ${item.quantity}
      </p>
    `;
  });
}
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
   let cartIcon = document.querySelector(".body i");

    let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    cartIcon.textContent = totalQuantity;
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}


    function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartIcon = document.querySelector(".body i");

  let totalQuantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  cartIcon.textContent = totalQuantity;
}

function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount(); 
  alert(name + " added to cart!");
}
updateCartCount();