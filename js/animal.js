//Refs
const petUlRef = document.querySelector("#pets");
const cartUlRef = document.querySelector("#cart");
const noPetpRef = document.querySelector("#no-pets");

// Lists
const petTypes = ["Dog", "Cat", "Rabbit", "Fox"];
const cart = [];

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

// Add pet to cart
function addPetToCart(e) {
  const petType = e.target.dataset.petType;
  cart.push(petType);
  console.log(cart);
  // showCart;
}

// SHowing the cart
// function showcart() {
//   for (let i = 0; i < cart.length; i++) {
//   const petType = petTypes[i];
//   console.log(petType);

//   const newLi = document.createElement("li");
//   newLi.innerHTML = petType;
//   // for loop for cart
// }

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
