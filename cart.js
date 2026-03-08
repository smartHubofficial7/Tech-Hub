let cart = JSON.parse(localStorage.getItem("cart")) || []

let div=document.getElementById("cart-items")

if(cart.length===0){

div.innerHTML="<h3>Your cart is empty</h3>"

}else{

cart.forEach(item=>{

div.innerHTML+=`
<div class="cart-item">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
</div>
`

})

}

function goCheckout(){

window.location.href="checkout.html"

}
