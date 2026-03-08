let cart = JSON.parse(localStorage.getItem("cart")) || []

const cartDiv = document.getElementById("cartItems")

function showCart(){

cartDiv.innerHTML=""

cart.forEach(p => {

cartDiv.innerHTML += `

<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

</div>

`

})

}

showCart()

function checkout(){

window.location.href="checkout.html"

}
