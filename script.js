let cart = JSON.parse(localStorage.getItem("cart")) || []

updateCartCount()

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

updateCartCount()

alert(name+" added to cart")

}

function buyNow(name,price){

addToCart(name,price)

window.location.href="checkout.html"

}

function updateCartCount(){

let c=document.getElementById("count")

if(c) c.innerText=cart.length

}

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase()

let products=document.querySelectorAll(".product")

products.forEach(p=>{

let name=p.querySelector("h3").innerText.toLowerCase()

p.style.display=name.includes(input)?"block":"none"

})

}
