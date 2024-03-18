// Getting Products form LocalStorage to Cart
const container = document.querySelector('.products-container');
let storedProducts = JSON.parse(localStorage.getItem("product"));
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

// Displaying products in cart with necessary details
if (storedProducts === null || storedProducts.length === 0) {
    itemCount = 0;
    showCount(itemCount);
    container.style.display = "flex";

    container.innerHTML += `<div class = "emptyCart" style="width: 100%; display: flex; justify-content: center; align-items: center; font-family:var(--poppins-font);"><p>"Cart is Empty"</p></div>`
} else {
    storedProducts.forEach((product, index) => {

        product.quantity = JSON.parse(localStorage.getItem("quantity" + index)) || product.quantity || 1;

        container.innerHTML += `
            <div class="product">
            <div class="productShowIntro">
            <img src="${product.productImage}" alt="${product.name}">
            <div class = "product-d">
            <h3 class="brandName">${product.brandName}</h3>
            <h5 class="name">${product.name}</h5>
            </div>
            </div>
            
            <div class="priceContainer">
            <h4 class="cart-price">Rs ${product.price}</h4>
            <p class="dPrice">${product.discountPrice}</p>
            </div>
            
            <div class="productQuantity">
            <span class="decrease"><i class="fa-solid fa-caret-left"></i></span>
            <input type = "number" class="quantity" value = "${product.quantity}">
            <span class="increase"><i class="fa-solid fa-caret-right"></i></span>
            </div>
        `
    });

};

// Selection of products
const products = document.querySelectorAll(".product");
products.forEach(product => {
    product.addEventListener('click', () => {
        product.classList.toggle("selectProduct");
    });
});
// Selecting and Deslecting all products at once
const checkBox = document.getElementById('selectAll');
checkBox.addEventListener('change', () => {
    if (storedProducts === null) {
        checkBox.disabled = true;
    }
    else if (checkBox.checked) {
        products.forEach(product => {
            product.classList.add("selectProduct")

        });
    } else {
        products.forEach(product => {
            product.classList.remove("selectProduct");

        });
    };
});

// Function to update localStorage with the current product list
function updateLocalStorage(products) {
    localStorage.setItem('product', JSON.stringify(products));
}

// deleting the selected items.
const deleteBtn = document.getElementById('delete');
deleteBtn.onclick = () => {
    products.forEach((product, index) => {
        if (product.classList.contains('selectProduct')) {
            product.remove();
            storedProducts[index] = null;
            localStorage.removeItem("quantity" + index);

        }
    });

    // Updating localStorage after deleting the items.
    const updatedProducts = storedProducts.filter(product => product !== null);

    itemCount = updatedProducts.length;
    showCount(itemCount);

    updateLocalStorage(updatedProducts);
    storedProducts = updatedProducts;
};


// Increasing and decreasing the quantity of products.
const quantity = document.querySelectorAll('.quantity');
const decreaseButtons = document.querySelectorAll('.decrease');

decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        if (quantity[index].value <= 1) {
            products[index].remove();
            storedProducts.splice(index, 1);
            updateLocalStorage(storedProducts);
            localStorage.removeItem("quantity" + index);
            itemCount--;
            showCount(itemCount);
        } else {
            storedProducts[index].quantity--;
            quantityValue(storedProducts[index].quantity, index);
            quantity[index].value = storedProducts[index].quantity;
            itemCount--;
            showCount(itemCount);
        }

    });
});

const increaseButtons = document.querySelectorAll('.increase');
increaseButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {

        // Only update the quantity for the selected product
        storedProducts[index].quantity++;
        quantityValue(storedProducts[index].quantity, index);
        quantity[index].value = storedProducts[index].quantity;
        itemCount++;
        showCount(itemCount);


    });

});
// Saving quatity of products to the localStorage.
function quantityValue(value, index) {
    localStorage.setItem("quantity" + index, JSON.stringify(value));
}


