let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added To Cart")

updateCount()

}

function buyNow(name,price){

cart=[{name,price}]

localStorage.setItem("cart",JSON.stringify(cart))

window.location="checkout.html"

}

function updateCount(){

let c=document.getElementById("count")

if(c)c.innerText=cart.length

}

updateCount()


function showCart(){

let div=document.getElementById("cartItems")

if(!div) return

let html=""

cart.forEach(item=>{
html+=`<p>${item.name} - ₹${item.price}</p>`
})

div.innerHTML=html

}

showCart()


function checkout(){

window.location="checkout.html"

}

function showPayment(){

document.getElementById("payment").style.display="block"

}

function confirmOrder(){

let name=document.getElementById("name").value
let phone=document.getElementById("phone").value
let address=document.getElementById("address").value

let order="New Order%0A"

cart.forEach(i=>{
order+=`${i.name} ₹${i.price}%0A`
})

order+=`%0AName:${name}%0APhone:${phone}%0AAddress:${address}`

window.location=`https://wa.me/YOURNUMBER?text=${order}`

alert("Order Confirmed")

localStorage.removeItem("cart")

}
