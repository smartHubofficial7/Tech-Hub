function showCart(){

cartDiv.innerHTML=""

if(cart.length === 0){
cartDiv.innerHTML="<h2 style='text-align:center'>Your cart is empty</h2>"
return
}

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
