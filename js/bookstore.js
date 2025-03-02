const booksUlRef = document.querySelector("#books");
const cartUlRef = document.querySelector("#cart");
const removeBtnRef = document.querySelector("#remove-book");
const noBooksRef = document.querySelector("#no-books");

const books = [
  "Hop on Pop",
  "Fox in Socks",
  "The Cat in the Hat",
  "A Fly Went By",
];
const cart = [];

function removeBookFromCart() {
  if (cart.length > 0) {
    cart.shift();
    showCart();
  }
}

function showCart() {
  cartUlRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = cart[i];
    cartUlRef.appendChild(newLi);
  }
  if (cart.length === 0) {
    noBooksRef.style.display = "block";
  } else {
    noBooksRef.style.display = "none";
  }
  removeBtnRef.disabled = cart.length === 0;
}
function addBookToCart(e) {
  cart.push(e.target.dataset.name);
  showCart();
}
for (let i = 0; i < books.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = books[i];
  const newBtn = document.createElement("button");
  newBtn.innerText = "+";
  newBtn.dataset.name = books[i];
  newBtn.onclick = addBookToCart;
  newLi.appendChild(newBtn);
  booksUlRef.appendChild(newLi);
}
removeBtnRef.onclick = removeBookFromCart;
showCart();
