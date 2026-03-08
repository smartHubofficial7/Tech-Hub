const products = [

{name:"iPhone 15",price:79999,image:"https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"},
{name:"Samsung Galaxy S24",price:74999,image:"https://m.media-amazon.com/images/I/71LhG9F3qAL._SX679_.jpg"},
{name:"OnePlus 12",price:64999,image:"https://m.media-amazon.com/images/I/61BAuSC0UnL._SX679_.jpg"},
{name:"Sony Headphones",price:9999,image:"https://m.media-amazon.com/images/I/61vJtKBJYkL._SX679_.jpg"},
{name:"Apple Watch",price:45000,image:"https://m.media-amazon.com/images/I/71F2XrYpQQL._SX679_.jpg"},
{name:"Gaming Laptop",price:95000,image:"https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"},
{name:"Boat Earbuds",price:1999,image:"https://m.media-amazon.com/images/I/61KNJav3S9L._SX679_.jpg"},
{name:"JBL Speaker",price:4999,image:"https://m.media-amazon.com/images/I/81R0dF+R5DL._SX679_.jpg"}

]

let cart = JSON.parse(localStorage.getItem("cart")) || []

document.getElementById("cartCount").innerText = cart.length

function showProducts(list){

const container = document.getElementById("products")

container.innerHTML=""

list.forEach((p,i)=>{

container.innerHTML += `
<div class="card">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button class="cartBtn" onclick="addCart(${i})">Add to Cart</button>

<button class="buy" onclick="buyProduct()">Buy</button>

</div>
`

})

}

showProducts(products)

function addCart(i){

cart.push(products[i])

localStorage.setItem("cart", JSON.stringify(cart))

document.getElementById("cartCount").innerText = cart.length

alert("Product added to cart")

}

function openCart(){

window.location.href="cart.html"

}

function buyProduct(){

document.getElementById("loginBox").style.display="block"

}

function login(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value

if(name=="" || email==""){
alert("Fill details")
return
}

alert("Login Successful")

document.getElementById("loginBox").style.display="none"

}

function searchProduct(){

let value = document.getElementById("search").value.toLowerCase()

let filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
)

showProducts(filtered)

}
