let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// ------------start cart ---------------------
// ==== CART ==================
let cartIcon = document.querySelector('#cart-btn');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// == Open cart
cartIcon.onclick = () => {
	cart.classList.add('active');
};

// == Close cart
closeCart.onclick = () => {
	cart.classList.remove('active');
};

// == Close Working JavaScript
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready);
} else {
	ready();
};

// == Making Function
function ready() {
	// Remove items from cart
	var removeCartButtons = document.getElementsByClassName('cart-remove');
	console.log(removeCartButtons);
	for (var i = 0; i < removeCartButtons.length; i++) {
		var button = removeCartButtons[i];
		button.addEventListener('click', removeCartItem);
	}
	// == Quantity changes
	var quantityInputs = document.getElementsByClassName('cart-quantity');
	for (var i = 0; i < quantityInputs.length; i++) {
		var input = quantityInputs[i];
		input.addEventListener('change', quantityChanged);
	}
}
// Add to cart
var addCart = document.getElementsByClassName('add-cart');
for (var i = 0; i < addCart.length; i++) {
  var button = addCart[i];
  button.addEventListener('click', addCartClicked);
}

// Buy button work
document.getElementsByClassName('btn-buy')[0]
  .addEventListener('click', buyButtonClicked);


// Buy button
function buyButtonClicked() {
alert('Your order is placed');
var cartContent = document.getElementsByClassName('cart-content')[0];
while (cartContent.hasChildNodes()) {
  cartContent.removeChild(cartContent.firstChild);
}
updatetotal();
};

// == Remove items from cart
function removeCartItem(event) {
var buttonClicked = event.target;
buttonClicked.parentElement.remove();
updatetotal();
};

// == Quantity changes
function quantityChanged(event) {
var input = event.target;
if (isNaN(input.value) || input.value <= 0) {
  input.value = 1;
}
updatetotal();
};

// Add to cart
function addCartClicked(event) {
var button = event.target;
var shopProducts = button.parentElement;
var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
var price = shopProducts.getElementsByClassName('price')[0].innerText;
var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
addProductToCart(title, price, productImg);
updatetotal();
};
function addProductToCart(title, price, productImg) {
var cartShopBox = document.createElement('div');
cartShopBox.classList.add('cart-box');
var cartItems = document.getElementsByClassName('cart-content')[0];
var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
for (var i = 0; i < cartItemsNames.length; i++) {
  if (cartItemsNames[i].innerText == title) {
    alert('You have already add this item to cart');
    return;
  }
}

var cartBoxContent = `
<img src="${productImg}" alt="image" class="cart-img">
  <div class="detail-box">
    <div class="cart-product-title">${title}</div>
    <div class="cart-price">${price}</div>
    <input class="cart-quantity" type="number" value="1">
  </div>
<i class='bi bi-trash3-fill cart-remove'></i>
`;

cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox);
cartShopBox.
  getElementsByClassName('cart-remove')[0]
  .addEventListener('click', removeCartItem);
cartShopBox
  .getElementsByClassName('cart-quantity')[0]
  .addEventListener('change', quantityChanged);
};
// == Uptade total
function updatetotal() {
var cartContent = document.getElementsByClassName('cart-content')[0];
var cartBoxes = cartContent.getElementsByClassName('cart-box');
var total = 0;
for (var i = 0; i < cartBoxes.length; i++) {
  var cartBox = cartBoxes[i];
  var priceElement = cartBox.getElementsByClassName('cart-price')[0];
  var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
  var price = parseFloat(priceElement.innerText.replace('$', ''));
  var quantity = quantityElement.value;
  total = total + (price * quantity);
}
// if price contain some cents value
total = Math.round(total * 100) / 100;

document.getElementsByClassName('total-price')[0].innerText = '$' + total;
document.getElementsByClassName('span-total-product')[0].textContent = i /= 1
};

// ------------end cart -----------------------


// ------------start login -----------------------
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}


window.onscroll = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    // modelSignUp.style.display = "none";
}


// ------------start signup--------------------------------------------------------
var modelSignUp = document.getElementById("signup-form");
var SignupOpen = document.getElementById("opensignup");
var CloseSignup = document.getElementsByClassName("closesignup-icon")[0];
// When the user clicks the button, open the modal 
SignupOpen.onclick = function() {
  modelSignUp.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
CloseSignup.onclick = function() {
  modelSignUp.style.display = "none";
}


// -------------end login---------------------





// -------------start slide--------------------
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

// -----------review slide--------------------------
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

// -----------Menu Product------------------------------


var modaldrink = document.getElementById("menuproduct-Drinks");
var btndrink = document.getElementById("MenuListProductDrink");
var spandrink = document.getElementsByClassName("coseBntDrink")[0];

btndrink.onclick = function() {
  modaldrink.style.display = "block";
}

spandrink.onclick = function() {
  modaldrink.style.display = "none";
}


// ---------------------endDrink menuproduct--------------------------

var modalfood = document.getElementById("menuproduct-food");

var btnfood = document.getElementById("MenuListProductFood");

var spanfood = document.getElementsByClassName("coseBntFood")[0];
// When the user clicks the button, open the modal 
btnfood.onclick = function() {
  modalfood.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanfood.onclick = function() {
  modalfood.style.display = "none";
}


// ------------------endFood menuproduct------------------------------

var modalbest = document.getElementById("menuproduct-best");
var btnbest = document.getElementById("MenuListProductbest");
var spanbest = document.getElementsByClassName("coseBntBest")[0];
 
btnbest.onclick = function() {
  modalbest.style.display = "block";
}

spanbest.onclick = function() {
  modalbest.style.display = "none";
}

// ----------------------end best-----------------------------------------

var modalfruit = document.getElementById("menuproductFruit");
var btnfruit = document.getElementById("MenuListProductFruit");
var spanfruit = document.getElementsByClassName("coseBntFruit")[0];

// When the user clicks the button, open the modal 
btnfruit.onclick = function() {
  modalfruit.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanfruit.onclick = function() {
  modalfruit.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function() {
//   modalfruit.style.display = "none";
// }

// --------------------end fruit--------------------





// ------------------displaynone payment-------------------------------

