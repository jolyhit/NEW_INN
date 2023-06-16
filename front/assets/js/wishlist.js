let buttonsToCart = document.querySelectorAll("#addToCart");
let wish = document.querySelectorAll(".wish");
let noProduct = document.querySelector("#noProduct")
let wishlistContainer = document.querySelector(".wishlist-container")
let footer = document.querySelector("footer")

buttonsToCart.forEach((button) => {
	button.addEventListener('click', () => {
		button.textContent = "Добавлен в корзину";
		button.classList.add("added");
	})
})
wish.forEach((el) => {
	el.addEventListener('click', () => {
		if (el.firstElementChild.classList.contains("disable")) {
			el.firstElementChild.classList.remove("disable");
		} else {
			el.firstElementChild.classList.add("disable");
		}
	})
})
if (wishlistContainer.childElementCount === 0) {
	footer.style.marginTop = "700px"
	noProduct.style.display = "block";
}
