let wish = document.querySelectorAll(".wish");
let noProduct = document.querySelector("#noProduct")
let findItemContainer = document.querySelector(".find-item-container")
let footer = document.querySelector("footer")

wish.forEach((el) => {
	el.addEventListener('click', () => {
		if (el.lastElementChild.classList.contains("enable")) {
			el.lastElementChild.classList.remove("enable");
		} else {
			el.lastElementChild.classList.add("enable");
		}
	})
})
if (findItemContainer.childElementCount === 0) {
	footer.style.marginTop = "800px"
	noProduct.style.display = "block";
}
