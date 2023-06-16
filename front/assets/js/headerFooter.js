let footerBuyers = document.querySelector(".footer-buyers");
let footerCompany = document.querySelector(".footer-company");
let buyersSvg;
let companySvg;
if (footerBuyers !== null) buyersSvg = footerBuyers.querySelector("svg");
if (footerBuyers !== null) companySvg = footerCompany.querySelector("svg");
let headerList = document.querySelectorAll(".container-head");
let closeHeader = document.querySelector(".close-header-mobile");
let openHeader = document.querySelector(".burger");
let headerMobileOpen = document.querySelector(".header-mobile-open");
let headerSearchOpen = document.querySelector(".header-search-open");
let headerMobileSearchBtn = document.querySelector(".mobile-search");
let closeHeaderSearch = document.querySelector(".close-header-search");

window.onresize = function() {
	if (window.innerWidth >= 1350) {
		headerMobileOpen.style.display = "none";
		headerSearchOpen.style.display = "none";
	} else {
		headerMobileOpen.style.display = "none";
		headerSearchOpen.style.display = "none";
	}
};

headerMobileSearchBtn.onclick = function () {
	headerSearchOpen.style.display = "block";
	headerSearchOpen.style.animation = "moveLeftRight 0.6s forwards";
	document.body.style.overflow = 'hidden';
}

closeHeaderSearch.onclick = function () {
	headerSearchOpen.style.animation = "moveLeftRightBack 0.6s forwards";
	document.body.style.overflow = '';
	setTimeout(function () {
		headerSearchOpen.style.display = "none";
	}, 400);
}

openHeader.onclick = function () {
	headerMobileOpen.style.display = "block";
	headerMobileOpen.style.animation = "moveLeftRight 0.6s forwards";
	document.body.style.overflow = 'hidden';
}

closeHeader.onclick = function () {
	headerMobileOpen.style.animation = "moveLeftRightBack 0.6s forwards";
	document.body.style.overflow = '';
	setTimeout(function () {
		headerMobileOpen.style.display = "none";
	}, 400);
}

footerBuyers.onclick = function () {
	if (footerBuyers.classList.contains("open")) {
		footerBuyers.classList.remove("open");
		buyersSvg.style.transform = "rotate(0deg)";
	} else {
		footerBuyers.classList.add("open");
		buyersSvg.style.transform = "rotate(180deg)";
	}
}

footerCompany.onclick = function () {
	if (footerCompany.classList.contains("open")) {
		footerCompany.classList.remove("open");
		companySvg.style.transform = "rotate(0deg)";
	} else {
		footerCompany.classList.add("open");
		companySvg.style.transform = "rotate(180deg)";
	}
}


headerList.forEach((el) => {
	let openListSvg = el.querySelector(".open-list");
	el.addEventListener('click', () => {
		if (el.classList.contains("open")) {
			el.parentElement.style.height = "44px";
			el.classList.remove("open");
			openListSvg.style.transform = "rotate(0deg)";
		} else {
			el.parentElement.style.height = "auto";
			el.classList.add("open");
			openListSvg.style.transform = "rotate(180deg)";
		}
	})
})
