const header_bottom = document.querySelector(".header");

window.addEventListener("scroll", () => {
	if (document.documentElement.scrollTop > 1000) {
		header_bottom.classList.add("hide");
	} else {
		header_bottom.classList.remove("hide");
	}
})
