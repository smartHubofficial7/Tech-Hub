function checkout(){

let user = localStorage.getItem("user")

if(!user){
alert("Please login first")
showPage("login")
return
}

showPage("checkout")

}
