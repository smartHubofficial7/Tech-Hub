// Cart array from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart function
function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

// Buy buttons functionality
document.querySelectorAll(".buy").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const product = document.querySelectorAll(".product")[index];
        const name = product.querySelector("h3").innerText;
        const price = parseInt(product.querySelector("p").innerText.replace("₹",""));
        addToCart(name, price);
        window.location.href = "checkout.html";
    });
});
