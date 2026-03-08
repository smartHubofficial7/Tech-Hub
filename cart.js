let cart=JSON.parse(localStorage.getItem("cart"))||[];

let div=document.getElementById("cart-items");

cart.forEach(item=>{
div.innerHTML+=`<p>${item.name} - ₹${item.price}</p>`;
});
