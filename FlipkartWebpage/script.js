// =======================
// SEARCH FUNCTIONALITY
// =======================

const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    productCards.forEach(card => {

        const productName =
            card.dataset.name.toLowerCase();

        if (productName.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// =======================
// DARK MODE
// =======================

const themeBtn = document.getElementById("themeBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }

});

// =======================
// LOGIN MODAL
// =======================

const loginBtn =
document.getElementById("loginBtn");

const loginModal =
document.getElementById("loginModal");

const closeLogin =
document.getElementById("closeLogin");

loginBtn.addEventListener("click", () => {

    loginModal.style.display = "flex";

});

closeLogin.addEventListener("click", () => {

    loginModal.style.display = "none";

});

// =======================
// CART
// =======================

let cartCount = 0;

const cartBtn =
document.getElementById("cartBtn");

const cartModal =
document.getElementById("cartModal");

const closeCart =
document.getElementById("closeCart");

const cartItems =
document.getElementById("cartItems");

let cartProducts = [];

document.querySelectorAll(".add-cart")
.forEach(button => {

button.addEventListener("click", () => {

const card =
button.parentElement;

const productName =
card.dataset.name;

const productPrice =
card.dataset.price;

cartCount++;

document.getElementById("cartCount")
.textContent = cartCount;

cartProducts.push(
`${productName} - ₹${productPrice}`
);

alert(productName + " added to cart");

});

});

cartBtn.addEventListener("click", () => {

cartModal.style.display = "flex";

if(cartProducts.length === 0){

cartItems.innerHTML =
"No items added yet";

}
else{

cartItems.innerHTML =
cartProducts
.map(item => `<p>${item}</p>`)
.join("");

}

});

closeCart.addEventListener("click", () => {

cartModal.style.display = "none";

});

// =======================
// PRODUCT DETAILS MODAL
// =======================

const productModal =
document.getElementById("productModal");

const closeProduct =
document.getElementById("closeProduct");

const modalImage =
document.getElementById("modalImage");

const modalTitle =
document.getElementById("modalTitle");

const modalPrice =
document.getElementById("modalPrice");

document.querySelectorAll(".product-card")
.forEach(card => {

card.addEventListener("click", e => {

if(e.target.classList.contains("add-cart"))
return;

modalImage.src =
card.querySelector("img").src;

modalTitle.innerText =
card.dataset.name;

modalPrice.innerText =
"₹" + card.dataset.price;

productModal.style.display =
"flex";

});

});

closeProduct.addEventListener("click", () => {

productModal.style.display = "none";

});

// =======================
// BUY NOW
// =======================

const buyNowBtn =
document.getElementById("buyNowBtn");

buyNowBtn.addEventListener("click", () => {

alert(
"🎉 Order Placed Successfully!"
);

productModal.style.display = "none";

});

// =======================
// WISHLIST
// =======================

document.querySelectorAll(".wishlist")
.forEach(heart => {

heart.addEventListener("click", e => {

e.stopPropagation();

heart.classList.toggle("active");

});

});

// =======================
// CATEGORY FILTER
// =======================

const categories =
document.querySelectorAll(".category");

categories.forEach(category => {

category.addEventListener("click", () => {

const selectedCategory =
category.dataset.category;

productCards.forEach(card => {

if(
selectedCategory ===
card.dataset.category
){

card.style.display = "block";

}
else{

card.style.display = "none";

}

});

});

});

// =======================
// SHOP NOW BUTTON
// =======================

const shopNowBtn =
document.getElementById("shopNowBtn");

shopNowBtn.addEventListener("click", () => {

window.scrollTo({

top:
document.querySelector(
".product-section"
).offsetTop,

behavior:"smooth"

});

});

// =======================
// BANNER SLIDER
// =======================

const bannerSlider =
document.getElementById("bannerSlider");

const bannerImages = [

"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700",

"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",

"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",

"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700"

];

let bannerIndex = 0;

setInterval(() => {

bannerIndex++;

if(
bannerIndex >=
bannerImages.length
){
bannerIndex = 0;
}

bannerSlider.src =
bannerImages[bannerIndex];

},3000);

// =======================
// PRODUCT SLIDER
// =======================

const slider =
document.querySelector(
".product-slider"
);

const leftBtn =
document.querySelector(".left");

const rightBtn =
document.querySelector(".right");

rightBtn.addEventListener("click", () => {

slider.scrollLeft += 300;

});

leftBtn.addEventListener("click", () => {

slider.scrollLeft -= 300;

});

// =======================
// BACK TO TOP
// =======================

const topBtn =
document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// =======================
// CLOSE MODAL ON OUTSIDE CLICK
// =======================

window.addEventListener("click", e => {

if(e.target === loginModal){

loginModal.style.display = "none";

}

if(e.target === cartModal){

cartModal.style.display = "none";

}

if(e.target === productModal){

productModal.style.display = "none";

}

});