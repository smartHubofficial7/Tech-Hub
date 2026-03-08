let cart=JSON.parse(localStorage.getItem("cart"))||[]

let div=document.getElementById("cart-items")

let total=0

cart.forEach((item,index)=>{

total+=item.price

div.innerHTML+=`
<div class="cart-item">
<h3>${item.name}</h3>
<p>₹${item.price}</p>
<button onclick="removeItem(${index})">Remove</button>
</div>
`

})

document.getElementById("total").innerText="Total: ₹"+total

function removeItem(i){

cart.splice(i,1)

localStorage.setItem("cart",JSON.stringify(cart))

location.reload()

}

function checkout(){

window.location.href="checkout.html"

}
