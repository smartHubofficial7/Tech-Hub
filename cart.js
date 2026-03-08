let cart = JSON.parse(localStorage.getItem("cart")) || []

const cartDiv = document.getElementById("cartItems")

function showCart(){

cartDiv.innerHTML=""

cart.forEach((p,i)=>{

cartDiv.innerHTML += `

<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="removeItem(${i})">Remove</button>

</div>

`

})

}

showCart()

function removeItem(i){

cart.splice(i,1)

localStorage.setItem("cart",JSON.stringify(cart))

showCart()

}

function checkout(){

window.location.href="checkout.html"

}

function goBack(){

window.location.href="index.html"

}
