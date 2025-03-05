const menuItems = ["Hamburger", "Cheeseburger", "Fries", "Onion Rings"];

let cart = []; // this is so cart will be empty when the page loads


const menuList = document.getElementById("menu");  // menu list where items will appear

const cartList = document.getElementById("cart");  

const removeItemBtn = document.getElementById("remove-item"); // Button to remove last item

const noItemsMessage = document.getElementById("no-items");

function checkCart() {
    if (cart.length === 0) {
        noItemsMessage.style.display = "block"; 
    } else {
        noItemsMessage.style.display = "none";   
    }
}

function updateCart() {
    cartList.innerHTML = "";  
    cart.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;  
        cartList.appendChild(li);
    });
    checkCart(); 
}


removeItemBtn.onclick = function() {
    cart.pop();  // Remove the last item from the cart
    updateCart(); 
};

menuItems.forEach(function(item) {
    const li = document.createElement("li"); 
    const button = document.createElement("button"); 
    button.textContent = "+"; 
    button.onclick = function() {
        cart.push(item);  
        updateCart();     //this will update cart display
    };

    li.textContent = item; 
    li.appendChild(button); 
    menuList.appendChild(li); 
});

updateCart();