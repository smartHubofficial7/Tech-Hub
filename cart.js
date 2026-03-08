let cart = JSON.parse(localStorage.getItem("cart")) || [];
let div = document.getElementById("cart-items");
div.innerHTML = "";

if(cart.length === 0){
    div.innerHTML = "<p>Your cart is empty</p>";
} else {
    cart.forEach(item => {
        div.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    });
}
