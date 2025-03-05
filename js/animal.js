//Refs
const petUlRef = document.querySelector("#pets");
const cartUlRef = document.querySelector("#cart");
const noPetpRef = document.querySelector("#no-pets");

// Lists
const petTypes = ["Dog", "Cat", "Rabbit", "Fox"];
const cart = [];

// Add pet to cart
function addPetToCart(e) {
  const petType = e.target.dataset.petType;
  cart.push(petType);
  console.log(cart);
  showCart();
}

for (let i = 0; i < petTypes.length; i++) {
  const petType = petTypes[i];
  console.log(petType);

  const newLi = document.createElement("li");
  newLi.innerHTML = petType;

  const newBtn = document.createElement("button");
  newBtn.innerHTML = "+";
  newBtn.dataset.petType = petType;
  newBtn.onclick = addPetToCart;

  newLi.appendChild(newBtn);

  petUlRef.appendChild(newLi);
}
toggleNoPets();

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

removeBtnRef.onclick = removePetFromCart;
showCart();
for (let i = 0; i < petss.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = pets[i];
  const newBtn = document.createElement("button");
  newBtn.innerText = "+";
  newBtn.dataset.name = pets[i];
  newBtn.onclick = addPetToCart;
  newLi.appendChild(newBtn);
  petUlRef.appendChild(newLi);
}

// Toggle no-pets paragraph
function toggleNoPets() {
  if (cart.length > 0) {
    // Do code if there's items in cart
    noPetpRef.style.display = "none";
  } else {
    // Do other code if there's no items in the cart
    noPetpRef.style.display = "block";
  }
}
