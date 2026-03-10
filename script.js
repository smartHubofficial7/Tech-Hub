function addToCart(name,price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Product Added to Cart");

}

if(document.getElementById("cartItems")){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let html = "";

cart.forEach(item=>{
html += `<p>${item.name} - ₹${item.price}</p>`;
});

document.getElementById("cartItems").innerHTML = html;

}
