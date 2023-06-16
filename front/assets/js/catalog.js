let catalogSelector = document.querySelector(".catalog-size-selector");
let catalogSelectorMobile = document.querySelector(".catalog-size-selector-mobile");
let catalogSelect = document.querySelector("#catalogSelect");
let catalogArrow = document.querySelector(".catalog-arrow");
let openCatalogSize = document.querySelector(".open-catalog-size");
let closeCatalogSize = document.querySelector("#closeCatalogSize");

catalogSelect.onclick = function () {
	if (catalogSelector.classList.contains("open")) {
		catalogSelector.classList.remove("open");
		catalogArrow.style.transform = "rotate(0deg)";
		catalogSelector.style.animation = "aniBack 0.8s forwards";
		setTimeout(function () {
			catalogSelector.style.display = "none";
		}, 400);
	} else {
		catalogSelector.classList.add("open");
		catalogArrow.style.transform = "rotate(180deg)";
		catalogSelector.style.animation = "ani 0.8s forwards";
		catalogSelector.style.display = "block";
	}
}

openCatalogSize.onclick = function () {
	catalogSelectorMobile.style.animation = "moveBottomTop 0.5s forwards";
	catalogSelectorMobile.style.display = "block";
	document.body.style.overflow = 'hidden';
}

closeCatalogSize.onclick = function () {
	catalogSelectorMobile.style.animation = "moveBottomTopBack 0.4s forwards";
	setTimeout(function () {
		catalogSelectorMobile.style.display = "none";
		document.body.style.overflow = '';
	}, 300);
}
