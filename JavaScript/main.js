// navigation bar 
// Track the previous scroll position
let prevScrollpos = window.scrollY;


// Add scroll event listener
window.addEventListener("scroll", function () {
    let currentScrollPos = window.scrollY;
    let main = document.querySelector(".main");

    // Check if it is the front page and the scroll position is greater than the inner height
    if (currentScrollPos > this.innerHeight) {
        main.classList.add('show');
    } else {
        main.classList.remove('show');
    }

    // Update the previous scroll position
    prevScrollpos = currentScrollPos;
});


//Front Page

// Selecting elements
const paragraph = document.querySelector(".fp-header-paragraph");
const header = document.querySelector(".fp-header");
const fpBtn = document.querySelector(".fp-btn");
const headerUnderline = document.querySelector('.fp-header-underline');
const socilLinks = document.querySelector('.fp-social-links');

// Setting initial styles
fpBtn.style.opacity = `0`;
paragraph.style.top = `-100%`;
header.style.left = `-100%`;
headerUnderline.style.left = `-100%`;
headerUnderline.style.right = `100%`;
fpBtn.style.bottom = `-100%`;

// Adding event listener to execute code after page load
window.addEventListener("load", () => {
    // Animating elements
    paragraph.style.top = `0`;
    header.style.left = `0`;
    header.style.scale = '1.3';

    setTimeout(() => {
        header.style.scale = '1';
    }, 1000);

    setTimeout(() => {
        headerUnderline.style.left = `-7px`;
        headerUnderline.style.right = `-7px`;
    }, 2600);

    fpBtn.style.bottom = `0`;

    setTimeout(() => {
        fpBtn.style.opacity = `1`;
        socilLinks.style.right = `0`;
    }, 2500);
});




// NewsLetter Section;
//     This code block adds an event listener to the "subscribe" button.
const subscribeBtn = document.getElementById("subscribe");
const email = document.getElementById("email");
// Using Regular Expressions to Validate an Email Address, it checks the pattern of Email.
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//     When the button is clicked, it checks if the email input field is empty.
subscribeBtn.addEventListener("click", () => {
    if (email.value === "") {
        alert("Please Enter Your Email Address");
    } else if (!isValidEmail(email.value)) {
        alert("Please Enter A Valid Email Address");
    } else {
        alert("Thank You For Subscribing To Our Newsletter");
    }
});

// Testimonial Section;

// Array of testomonials
let testimonials = [
    {
        name: "Sahil Dahal - Lumina Customer",
        content:
            ` "Lumina is an amazing site that makes it possible to get printers at much cheaper prices. I saved over Rs 5000 on my printer and got free shipping. I would highly recommend this site to anyone looking to buy a printer."`,
    },
    {
        name: "Sandip Dhakal - Lumina Customer",
        content: `"Lumina is the best site to buy printers. I got my printer delivered within 2 days and got extra 2 years Student warrenty. I would highly recommend this site to any student looking to buy a printer."`
    },
    {
        name: "Oscar - Lumina Customer",
        content: `"Lumina is great and gets 5 star."`,
    },
    {
        name: "Shreyan - Lumina Customer",
        content: `"Best printers in Nepal and I loved the customer service."`,
    },
];

// looping through the array of testimonials using forEach loop; and displaying the content on the page.
testimonials.forEach(testimonial => {
    const { name, content } = testimonial; // Destructuring the array
    const container = document.querySelector(".testimonial-slider-container");
    container.innerHTML +=
        `<div class="testimonial-slider-item ">
            <div class="testimonial-card">
                <p class="testimonial-content">
                ${content}
                </p>
                <p class="testimonial-card-name">
                ${name}
                </p>
            </div>
        </div>
    `;
});

// Testimonial Slider

let direction = 1;
let currentIndex = 0;

function changeTestimonial() {
    const items = document.querySelectorAll('.testimonial-slider-item');

    // Hide the current testimonial item
    items[currentIndex].style.opacity = '0';

    // Increment the currentIndex based on the direction
    currentIndex += direction;

    // Check if currentIndex reaches the boundaries
    if (currentIndex === items.length || currentIndex === -1) {
        direction = -direction; // Reverse the direction when reaching boundaries
        currentIndex += direction; // Adjust currentIndex accordingly
    }

    // Update positions and opacity for all items
    for (let i = 0; i < items.length; i++) {
        const offset = (i - currentIndex) * 800;
        items[i].style.left = `${offset}px`;
        items[i].style.opacity = (i === currentIndex) ? '1' : '0';
    }
}

const nextBtn = document.querySelector('.testimonial-arrow-right');
const prevBtn = document.querySelector('.testimonial-arrow-left');

nextBtn.addEventListener('click', () => {
    direction = 1;
    changeTestimonial();
});

prevBtn.addEventListener('click', () => {
    direction = -1;
    changeTestimonial();
});


setInterval(changeTestimonial, 6000);


// FAQ Section;
// Array of FAQs

let faqs = [
    {
        question: "What is Lumina?",
        answer: "Lumina is an online store that sells printers and other accessories at a cheaper price. We also provide free shipping and student warrenty."
    },
    {
        question: "What is the student warrenty?",
        answer: "Student warrenty is a warrenty that is exclusively for students. It is an extra 2 year warrenty that is provided by Lumina."
    },
    {
        question: "How do I get the student warrenty?",
        answer: "You can get the student warrenty by sending us your student ID card and your college ID card. You can send us the ID cards by email or by contacting us."
    },
    {
        question: "What is the return policy?",
        answer: "You can return the product within 7 days of purchase if the product is damaged or if you are not satisfied with the product."
    },
    {
        question: "What is the shipping policy?",
        answer: "We provide free shipping all over Nepal. You will get your product within 2 days of purchase."
    },
];
// Looping through the array of FAQs using forEach loop; and displaying the content on the page.
faqs.forEach(faq => {
    const { question, answer } = faq; // Destructuring the array
    const container = document.querySelector(".qna-container");
    container.innerHTML +=
        ` <div class="qna-card">
    <div class="qnarrow">
        <h4 class="question">${question}</h4>
        <i class="fas fa-chevron-down qna-chevron"></i>
    </div>
    <div class="answer-container">
        <p class="answer">${answer}</p>
    </div>
</div>`
});


// FAQ Accordion
const cards = document.querySelectorAll('.qna-card');
const arrows = document.querySelectorAll('.qna-chevron');
const answers = document.querySelectorAll('.answer-container');
const questions = document.querySelectorAll('.qnarrow');
// Iterate over each card in the 'cards' array using forEach
cards.forEach((card, i) => {
    // Add a click event listener to each card
    card.addEventListener('click', () => {
        answers[i].classList.toggle('active');

        // Get the next element sibling of the corresponding question element
        let panel = questions[i].nextElementSibling;

        // Check if the 'maxHeight' style property is set on the panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            arrows[i].style.transform = 'rotate(0deg)';
        } else {
            // If 'maxHeight' is not set, set it to the scroll height of the panel to expand it
            panel.style.maxHeight = panel.scrollHeight + 'px';
            arrows[i].style.transform = 'rotate(180deg)';
        }
    });
});

// Add to Cart 
let cartProducts = JSON.parse(localStorage.getItem("product")) || [];
const cartButtons = document.querySelectorAll(".cart");
const cartAlert = document.getElementById("cart-alert");
const cartCount = document.querySelectorAll(".cart-count");
// Load the itemCount from localStorage
let itemCount = parseInt(localStorage.getItem("itemCount")) || 0;
// Update the cartCount elements with the initial itemCount
cartCount.forEach(cartCounter => {
    cartCounter.innerText = itemCount;
    if (itemCount > 0) {
        cartCounter.style.display = "inline";
    } else {
        cartCounter.style.display = "none";
    }
});

cartButtons.forEach(cartButton => {
    cartButton.addEventListener("click", () => {
        itemCount++;
        cartCount.forEach(cartCounter => {
            cartCounter.innerText = itemCount;
            cartCounter.style.display = "inline";
        });
        cartAlert.style.display = "block";
        setTimeout(() => {
            cartAlert.style.display = "none";
        }, 2000);
        // Update localStorage with the new itemCount
        localStorage.setItem("itemCount", itemCount.toString());
    });
});

// Add items to localStorage
const products = document.querySelectorAll('.b-product');


products.forEach(product => {
    const cartBtn = product.querySelector('.cart');

    cartBtn.addEventListener('click', () => {
        const productContainer = document.querySelector(".b-product-container");
        const imageContainer = productContainer.querySelector(".b-product-image");
        const productDescription = product.querySelector(".b-product-desc");
        let brandName = productDescription.querySelector(".brand-name").innerText.split(" ")[1];
        let name = productDescription.querySelector(".product-name").innerHTML;
        let price = product.querySelector(".price").innerText.split(" ")[2];
        let discountPriceElement = product.querySelector(".discount-price");
        let discountPrice = discountPriceElement ? discountPriceElement.innerHTML : "";
        let productImage = imageContainer.querySelector(".product-image").src;
        console.log(productImage);

        let newProduct = {
            productImage: productImage,
            brandName: brandName,
            name: name,
            price: price,
            discountPrice: discountPrice,
            quantity: 1
        }

        let existingProduct = cartProducts.find((product) => product.name === newProduct.name);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartProducts.push(newProduct);

        }

        localStorage.setItem("product", JSON.stringify(cartProducts));

    });
});

