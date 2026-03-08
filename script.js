let cart = JSON.parse(localStorage.getItem("cart")) || [];

// UPDATE CART COUNT
function updateCount() {
let c = document.getElementById("count");
if (c) {
c.innerText = cart.length;
}
}

// ADD TO CART
function addToCart(name, price) {

cart.push({ name, price });

localStorage.setItem("cart", JSON.stringify(cart));

alert("Added To Cart 🛒");

updateCount();
}

// BUY NOW
function buyNow(name, price) {

cart = [{ name, price }];

localStorage.setItem("cart", JSON.stringify(cart));

window.location = "checkout.html";
}

// SHOW CART ITEMS
function showCart() {

let div = document.getElementById("cartItems");

if (!div) return;

let html = "";
let total = 0;

cart.forEach((item, index) => {

total += item.price;

html += `
<p>
${item.name} - ₹${item.price}
<button onclick="removeItem(${index})">❌</button>
</p>
`;

});

html += `<h3>Total: ₹${total}</h3>`;

div.innerHTML = html;
}

// REMOVE ITEM
function removeItem(index) {

cart.splice(index, 1);

localStorage.setItem("cart", JSON.stringify(cart));

showCart();

updateCount();
}

// GO TO CHECKOUT
function goCheckout() {

if (cart.length === 0) {

alert("Cart is empty");

return;

}

window.location = "checkout.html";
}

// SHOW PAYMENT
function showPayment() {

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let address = document.getElementById("address").value;

if (name === "" || phone === "" || address === "") {

alert("Please fill all details");

return;

}

document.getElementById("payment").style.display = "block";
}

// CONFIRM ORDER
function confirmOrder() {

let name = document.getElementById("name").value
let phone = document.getElementById("phone").value
let address = document.getElementById("address").value

let order="🛒 NEW ORDER%0A%0A"

cart.forEach(i=>{
order+=`${i.name} - ₹${i.price}%0A`
})

order+=`%0A👤 Name: ${name}%0A📞 Phone: ${phone}%0A📍 Address: ${address}`

// YOUR WHATSAPP NUMBER
window.location=`https://wa.me/918481944109?text=${order}`

alert("Order Confirmed ✅")

localStorage.removeItem("cart")

cart=[]

updateCount()

}

// RUN FUNCTIONS
updateCount();
showCart();
