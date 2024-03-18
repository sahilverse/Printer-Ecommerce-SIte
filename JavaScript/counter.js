// ItemCount
const cartAlert = document.getElementById("cart-alert");
const cartCount = document.querySelectorAll(".cart-count");
// Load the itemCount from localStorage
let itemCount = parseInt(localStorage.getItem("itemCount")) || 0;


// Update the cartCount elements with the initial itemCount
showCount(itemCount);
function showCount(itemCount) {
    cartCount.forEach(cartCounter => {
        cartCounter.innerText = itemCount;
        if (itemCount > 0) {
            cartCounter.style.display = "inline";
        } else if (itemCount < 0) {
            itemCount = 0;
        } else {
            cartCounter.style.display = "none";
        }
    });

    localStorage.setItem("itemCount", itemCount.toString());
} 