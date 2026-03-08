let cart = JSON.parse(localStorage.getItem("cart")) || []

const cartDiv = document.getElementById("cartItems")

function showCart(){

cartDiv.innerHTML=""

if(cart.length===0){

cartDiv.innerHTML="<h2 style='text-align:center'>Your cart is empty</h2>"

document.getElementById("totalPrice").innerText=""

return

}

let total=0

cart.forEach((p,i)=>{

total += Number(p.price)

cartDiv.innerHTML += `

<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick="removeItem(${i})">Remove</button>

</div>

`

})

document.getElementById("totalPrice").innerText="Total: ₹"+total

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
