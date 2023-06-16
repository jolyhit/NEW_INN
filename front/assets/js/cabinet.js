let phone = document.getElementById('phone');
let cabinetButton = document.querySelector(".cabinet-mobile-head");
let cabinetMobileSelector = document.querySelector(".cabinet-mobile-selector");
let cabinetButtonSpan = cabinetButton.querySelector("span");
let cabinetButtonSvg = cabinetButton.querySelector("svg");

phone.onclick = function() {
	if (phone.value === "") phone.value = "+7";
}

function ValidMail() {
	let mark = document.getElementById('markEmail')
	let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
	let myMail = document.getElementById('email').value;
	let valid = re.test(myMail);
	if (valid) mark.style.visibility = "visible";
	else mark.style.visibility = "hidden";
}

function ValidPhone() {
	let mark = document.getElementById('markPhone');
	let re = /^[\d\+][\d\(\)\ -]{10}\d$/;
	let myPhone = document.getElementById('phone').value;
	let valid = re.test(myPhone);
	if (valid) mark.style.visibility = "visible";
	else mark.style.visibility = "hidden";
}

cabinetButton.onclick = function () {
	if (cabinetMobileSelector.style.display === "block") {
		cabinetMobileSelector.style.display = "none"
	} else {
		cabinetMobileSelector.style.display = "block"
	}
}

document.addEventListener( 'click', (e) => {
	if (e.target !== cabinetButton && e.target !== cabinetButtonSvg && e.target !== cabinetButtonSpan) {
		cabinetMobileSelector.style.display = "none";
	}
});
