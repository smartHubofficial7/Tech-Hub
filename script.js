let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart(){
document.getElementById("cart-count").innerText = cart.length;
}

updateCart();

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

alert(name + " added to cart");
}

function buyNow(name,price){

let user = localStorage.getItem("user");

if(!user){
alert("Please login first");
window.location.href="login.html";
return;
}

alert("Order placed for " + name);
}
