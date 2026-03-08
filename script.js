let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

alert(name+" added to cart")

}

function buyNow(name,price){

addToCart(name,price)

window.location.href="checkout.html"

}
