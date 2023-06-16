let order = document.querySelectorAll(".order");
let productColor = document.querySelectorAll(".product-color-container");
let productSize = document.querySelector(".product-size");
let width = document.body.clientWidth;
let ordersButton = document.querySelector(".orders-mobile-head");
let ordersMobileSelector = document.querySelector(".orders-mobile-selector");
let ordersButtonSpan = ordersButton.querySelector("span");
let ordersButtonSvg = ordersButton.querySelector("svg");

window.onresize = function () {
	productColor.forEach((color) => {
		if (window.innerWidth <= 1350 && color.nextElementSibling !== productSize) {
			swap(color, color.nextElementSibling.firstElementChild)
		}
	});
}

order.forEach((el) => {
	el.addEventListener('click', () => {
		let price = el.querySelector('.order-price');
		if (el.classList.contains("open")) {
			if (el && window.screen.width <= 1350) {
				price.style.visibility = "visible";
				el.classList.remove("open");
			} else {
				price.style.visibility = "visible";
				el.classList.remove("open");
			}
		} else {
			if (el.childElementCount > 1) {
				price.style.visibility = "hidden";
				el.classList.add("open");
			}
		}
	})
})

window.addEventListener('resize', () => {
	let width = document.body.clientWidth;
	productColor.forEach((color) => {
		if (width <= 1350 && color.nextElementSibling !== productSize) {
			swap(color, color.nextElementSibling.firstElementChild);
		}
	});
});

function swap(node1, node2) {
	const afterNode2 = node2.nextElementSibling;
	const parent = node2.parentNode;
	node1.replaceWith(node2);
	parent.insertBefore(node1, afterNode2);
}

ordersButton.onclick = function () {
	if (ordersMobileSelector.style.display === "block") {
		ordersMobileSelector.style.display = "none";
	} else {
		ordersMobileSelector.style.display = "block";
	}
}

document.addEventListener( 'click', (e) => {
	if (e.target !== ordersButton && e.target !== ordersButtonSvg && e.target !== ordersButtonSpan) {
		ordersMobileSelector.style.display = "none";
	}
});
