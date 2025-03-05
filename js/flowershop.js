const FlowersList = document.getElementById("flowers");
const cartList = document.getElementById("cart");
const noFlower = document.getElementById("noFlowers");

const availableFlowers = [
  "Rose",
  "Tulip",
  "Daisy",
  "Lily",
  "SunFlower",
  "Lavender",
];
let cart = [];

function update() {
  cartList.innerHTML = "";
  if (cart.length === 0) {
    noFlower.style.display = "block";
  } else {
    noFlower.style.display = "none";
    for (let i = 0; i < cart.length; i++) {
      const li = document.createElement("li");
      li.textContent = cart[i];
      cartList.appendChild(li);
    }
  }
}

for (let i = 0; i < availableFlowers.length; i++) {
  const li = document.createElement("li");
  li.textContent = availableFlowers[i];

  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.setAttribute("data-item", availableFlowers[i]);
  addButton.addEventListener("click", function () {
    cart.push(this.getAttribute("data-item"));
    update();
  });

  li.appendChild(addButton);
  FlowersList.appendChild(li);
}

document.getElementById("remove").addEventListener("click", function () {
  if (cart.length > 0) {
    cart.pop();
    update();
  }
});
