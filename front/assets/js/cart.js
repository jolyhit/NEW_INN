let noProduct = document.querySelector("#noProduct");
let cartProductsContainer = document.querySelector(".cart-products-container");
let cartProductsContainerMobile = document.querySelector(".cart-products-container-mobile");
let cartPromoCode = document.querySelector(".cart-promo-code");
let promoCode = document.querySelector(".promo-code");
let cartProduct = document.querySelectorAll(".cart-product");
let placeOrderBtn = document.querySelector(".place-order");
let makingOrder = document.querySelector(".making-order");
let makingOrderBackward = document.querySelector(".making-order-backward");
let promoCodeInputContainer = document.querySelector(".promo-code-input-container");
let promoCodeButton = document.querySelector(".promo-code-button");
let productSizeButton = document.querySelectorAll(".product-size");
let burger = document.querySelectorAll(".burger");
let burgerOpen = document.querySelectorAll(".burger-open");

window.onresize = function () {
	if (window.innerWidth >= 1350) {
		cartProductsContainerMobile.style.display = "none";
		makingOrderBackward.style.display = "none";
		makingOrder.style.display = "flex";
		placeOrderBtn.style.display = "none";
	} else {
		cartProductsContainerMobile.style.display = "block";
		makingOrderBackward.style.display = "block";
		cartPromoCode.style.display = "block";
		placeOrderBtn.style.display = "block";
		makingOrder.style.display = "none";
	}
};

if (cartProductsContainer.childElementCount < 1) {
	cartProductsContainer.style.height = "600px";
	noProduct.style.display = "block";
}

promoCode.onclick = promoCodeClick;
promoCodeButton.onclick = promoCodeClick;

function promoCodeClick() {
	if (cartPromoCode.classList.contains("open")) {
		cartPromoCode.classList.remove("open");
		promoCodeInputContainer.style.animation = "aniBack 0.7s forwards";
		setTimeout(function () {
			promoCodeInputContainer.style.display = "none";
		}, 400);
	} else {
		promoCodeInputContainer.style.animation = "ani 0.6s forwards";
		cartPromoCode.classList.add("open");
		promoCodeInputContainer.style.display = "flex";
	}
}

productSizeButton.forEach((el) => {
	el.addEventListener('click', () => {
		let cartSize = el.querySelector('.cart-size');
		if (cartSize.classList.contains("open")) {
			el.style.border = "1px solid #DBD7D2";
			el.style.background = "#FFF";
			el.style.padding = "17px";
			cartSize.classList.remove("open");
			cartSize.style.animation = "aniBack 0.7s forwards";
			setTimeout(function () {
				cartSize.style.display = "none";
			}, 400);
		} else {
			el.style.background = "#E2E7EB";
			el.style.border = "none";
			el.style.padding = "18px";
			cartSize.style.animation = "ani 0.7s forwards";
			cartSize.classList.add("open");
			cartSize.style.display = "block";
		}
	})
})

burger.forEach((el) => {
	el.addEventListener('click', () => {
		let productMenu = el.nextElementSibling;
		productMenu.style.display = "flex";
		productMenu.style.animation = "moveRightLeft 0.5s forwards";
	})
})

burgerOpen.forEach((el) => {
	el.addEventListener('click', () => {
		let productMenu = el.parentElement;
		productMenu.style.animation = "moveRightLeftBack 0.5s forwards";
		setTimeout(function () {
			productMenu.style.display = "none";
		}, 300);
	})
})

placeOrderBtn.onclick = function () {
	makingOrder.style.display = "block";
	cartProductsContainerMobile.style.display = "none";
	placeOrderBtn.style.display = "none";
	cartPromoCode.style.display = "none";
	makingOrderBackward.style.display = "block";
}

makingOrderBackward.onclick = function () {
	makingOrder.style.display = "none";
	cartProductsContainerMobile.style.display = "block";
	placeOrderBtn.style.display = "block";
	cartPromoCode.style.display = "block";
	makingOrderBackward.style.display = "none";
}

cartProduct.forEach((el) => {
	let productCount = el.querySelector(".count");
	let productCountReduce = el.querySelector(".product-count-reduce");
	let productCountAppend = el.querySelector(".product-count-append");
	productCountReduce.onclick = function () {
		if (+productCount.textContent > 1) {
			+productCount.textContent--;
		}
	}
	productCountAppend.onclick = function () {
		if (+productCount.textContent < 99) {
			+productCount.textContent++;
		}
	}
})
