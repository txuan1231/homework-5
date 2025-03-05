const petsUlRef = document.querySelector("#pets");
const cartUlRef = document.querySelector("#cart");
const removeBtnRef = document.querySelector("#remove-pet");
const noPetsRef = document.querySelector("#no-pets");

const pets = ["Dog", "Cat", "Rabbit", "Fox"];
const cart = [];

function removePetFromCart() {
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
    noPetsRef.style.display = "block";
  } else {
    noPetsRef.style.display = "none";
  }
  removeBtnRef.disabled = cart.length === 0;
}
function addPetToCart(e) {
  cart.push(e.target.dataset.name);
  showCart();
}
for (let i = 0; i < pets.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = pets[i];
  const newBtn = document.createElement("button");
  newBtn.innerText = "+";
  newBtn.dataset.name = pets[i];
  newBtn.onclick = addPetToCart;
  newLi.appendChild(newBtn);
  petsUlRef.appendChild(newLi);
}
removeBtnRef.onclick = removePetFromCart;
showCart();
