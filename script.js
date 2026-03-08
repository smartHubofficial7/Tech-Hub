let cart = [];

function login(){

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;

if(name=="" || phone==""){

alert("Enter details");

return;

}

localStorage.setItem("userName",name);
localStorage.setItem("phone",phone);

document.getElementById("loginBox").style.display="none";
document.getElementById("store").style.display="block";

}

function addToCart(name,price){

cart.push({name,price});

showCart();

}

function showCart(){

let cartDiv=document.getElementById("cart");

cartDiv.innerHTML="";

cart.forEach(item=>{

cartDiv.innerHTML+=`<p>${item.name} - ₹${item.price}</p>`;

});

}

function order(){

let address=document.getElementById("address").value;

let name=localStorage.getItem("userName");

let phone=localStorage.getItem("phone");

if(address==""){

alert("Enter address");

return;

}

let message="New Order%0A";

message+="Name: "+name+"%0A";

message+="Phone: "+phone+"%0A";

message+="Address: "+address+"%0A";

message+="Items:%0A";

cart.forEach(item=>{

message+=item.name+" - ₹"+item.price+"%0A";

});

window.open("https://wa.me/918481944109?text="+message);

}
