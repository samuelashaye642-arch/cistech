// let orderName = document.getElementsByClassName('ta').value;
// let orderPrice = document.getElementsByClassName('non').value;
// let orderbtn = document.getElementsByClassName('goo');
// let docs = document.getElementById('docs');
// const addToCartButtons = document.querySelectorAll('.isaac button');
// const cartIcon = document.querySelector(".body i")
    
// let cartCount = 0;
// function addCart() {
//   docs.innerHTML += `
//     <div>${orderName}</div>
//     <div>${orderPrice}</div>
//   `
// }
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     cartCount++;
//     cartIcon.textContent = cartCount;
//     addCart();
//   });
// })
// Get cart from localStorage or create empty array
// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Function to add item to cart
// function addCart() {

//   // Example item (you can improve this later to make it dynamic)
//   const item = {
//     name: "Spaghetti Bolognese",
//     price: 29,
//     quantity: 1
//   };

//   // Check if item already exists in cart
//   let existingItem = cart.find(product => product.name === item.name);

//   if (existingItem) {
//     existingItem.quantity += 1; // Increase quantity
//   } else {
//     cart.push(item); // Add new item
//   }

//   // Save updated cart to localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));

//   alert(item.name + " added to cart 🛒");
// }

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("carItems");


