// Shows Search Bar 
const searchBar = document.querySelector(".search-bar");
const search = document.getElementById("search");
if (searchBar) {
    searchBar.addEventListener("click", () => {
        searchBar.classList.add("active");
        setTimeout(() => {
            search.style.width = "200px";
            search.style.opacity = "1";
            search.focus();
        }, 200);

    });

    document.addEventListener("click", (e) => {
        if (!searchBar.contains(e.target)) {
            search.style.width = "0";
            search.style.opacity = "0";
            searchBar.classList.remove("active");
            search.value = "";
        }
    });
};

// Search in Lumina
function searchLumina() {
    const filter = document.getElementById('search').value.toUpperCase();
    const products = document.querySelectorAll('.product');
    let anyMatchFound = false;

    for (let i = 0; i < products.length; i++) {
        let a = products[i].querySelector('.product-name');
        let b = products[i].querySelector('.brand');
        let valueA = a ? (a.innerText || a.innerHTML || a.textContent) : '';
        let valueB = b ? (b.innerText || b.innerHTML || b.textContent) : '';

        if (valueA.toUpperCase().includes(filter) || valueB.toUpperCase().includes(filter)) {
            products[i].style.display = "";
            anyMatchFound = true;
        } else {
            products[i].style.display = "none";
        };
    };

    // Display "No match found" if no products are displayed
    const productsSection = document.querySelector('.noMatch');

    if (!anyMatchFound) {
        productsSection.innerHTML = `<p style="font-family: var(--poppins-font);">"No match found"</p>`;

    } else {
        productsSection.innerHTML = "";
    };
};

// Display products in Lumina
let productsArray = [

    {
        name: "Epson L130 Ink Tank Single Printer",
        brand: "Epson",
        price: "10,000",
        discount: "13,000",
        image: "./Images/Home/BestSellersProducts/Printer2.png",

    },
    {
        name: "PIXMA TS315 INKJET PRINTING",
        brand: "Canon",
        price: "11,000",
        discount: "13,000",
        image: "./Images/Home/BestSellersProducts/Printer3.png",

    },

    {
        name: "Canon Pixma E410 3 In 1 Multi-Function Inkjet Printer",
        brand: "Canon",
        price: "9,919",
        discount: "10,000",
        image: "https://static-01.daraz.com.np/p/6dc110445006c6b9a983270144eb246f.jpg_750x750.jpg_.webp",

    },
    {
        name: "Brother DCP-T420W 3-in-1 Inkjet Color Printer",
        brand: "Brother",
        price: "25,000",
        discount: "30,000",
        image: "https://static-01.daraz.com.np/p/0e0a84abd4bba64071afd5864c299a68.jpg_750x750.jpg_.webp",

    },
    {
        name: "Canon Pixma G2010 All-in-One Ink Tank Colour Printer",
        brand: "Canon",
        price: "19,999",
        discount: "21,000",
        image: "https://static-01.daraz.com.np/p/85ba487097065f8e8cb616e78b239cdf.jpg_750x750.jpg_.webp",

    },
    {
        name: "HP 107A Laser Printer",
        brand: "HP",
        price: "17,999",
        discount: "21,000",
        image: "https://static-01.daraz.com.np/p/d9a3fd4a8db66706681b51e298a8763a.png_750x750.jpg_.webp",

    },
    {
        name: "Lenovo LJ2205 Mono USB Laser Printer",
        brand: "Lenovo",
        price: "20,000",
        discount: "22,725",
        image: "https://static-01.daraz.com.np/p/0eb932b4f1bbf42ea14cabc8458af56e.jpg_750x750.jpg_.webp",

    },
    {
        name: "Canon MF3010 Laser Printer",
        brand: "Canon",
        price: "26,999",
        discount: "28,999",
        image: "https://static-01.daraz.com.np/p/3dff0ad6651d6dbf1d65cb4d205e3339.jpg_750x750.jpg_.webp",

    },
    {
        name: "LASERJET PRO M15W",
        brand: "Canon",
        price: "12,000",
        discount: "15,000",
        image: "./Images/Home/BestSellersProducts/Printer1.png",

    },
    {
        name: "MULTI-FUNCTION PRINTER INKJET PRINTING",
        brand: "Epson",
        price: "22,000",
        discount: "23,000",
        image: "./Images/Home/BestSellersProducts/Printer4.png",

    },
    {
        name: "Brother HL-L2365DW Laser Printer",
        brand: "Brother",
        price: "24,499",
        discount: "25,000",
        image: "https://static-01.daraz.com.np/p/26b734c7472ac59aa8382657cc7c9fbd.jpg_750x750.jpg_.webp",

    },
    {
        name: "Canon Pixma G3060 Printer",
        brand: "Canon",
        price: "26,499",
        discount: "28,999",
        image: "https://static-01.daraz.com.np/p/929e6676d5352a8082459787395a99d0.jpg_750x750.jpg_.webp",

    },
];

const productsContainer = document.querySelector(".products-container");

productsArray.forEach((product) => {
    const { name, brand, price, discount, image } = product;
    productsContainer.innerHTML +=
        ` <div class="product">
            <div class="product-d">
                <p class="product-name">${name}</p>
                <span class="brand-name">Brand: <span class="brand">${brand}</span></span>

                <div class="pro-review" style="margin-top: 5px">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
            <div class="product-image-container">
                <img src="${image}" alt="Printer"
                    class="product-image"  />
            </div>

            <button class="btn-primary b-btn cart" >
                Add to cart
                <span class="price" style="padding: 0 20px;"><span class="discount-price" >Rs ${discount}</span>Rs ${price}</span>
            </button>

        </div>
        `;
});

