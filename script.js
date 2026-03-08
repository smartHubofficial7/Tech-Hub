const products = [

{
name:"iPhone 15",
price:"₹79,999",
image:"https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg"
},

{
name:"Samsung Galaxy S24",
price:"₹74,999",
image:"https://m.media-amazon.com/images/I/71LhG9F3qAL._SX679_.jpg"
},

{
name:"OnePlus 12",
price:"₹64,999",
image:"https://m.media-amazon.com/images/I/61BAuSC0UnL._SX679_.jpg"
},

{
name:"Sony Headphones",
price:"₹9,999",
image:"https://m.media-amazon.com/images/I/61vJtKBJYkL._SX679_.jpg"
},

{
name:"Apple Watch",
price:"₹45,000",
image:"https://m.media-amazon.com/images/I/71F2XrYpQQL._SX679_.jpg"
},

{
name:"Gaming Laptop",
price:"₹95,000",
image:"https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
}

]

const productContainer = document.getElementById("products")

products.forEach((p,i)=>{

productContainer.innerHTML += `
<div class="card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>${p.price}</p>
<button onclick="buyProduct(${i})">Buy</button>
</div>
`

})

function buyProduct(index){

document.getElementById("loginBox").style.display="block"

}

function login(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value

if(name=="" || email==""){
alert("Please fill details")
return
}

alert("Login Successful")

document.getElementById("loginBox").style.display="none"

}
