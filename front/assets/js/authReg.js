let continueBtn = document.querySelector(".continue");
let authInput = document.querySelector("#authInput");
let authRegContainer = document.querySelector(".auth-reg-container");
let backwardAuth = document.querySelector("#backwardAuth");
let authNumber = document.querySelector("#authNumber")
let timerId
let counterContainer = document.createElement("div");
counterContainer.id = "counterContainer";
let sentCodeAgain = document.createElement("div");
sentCodeAgain.id = "sentCodeAgain"
sentCodeAgain.textContent = "Отправить код повторно"
let enterCodeTitle = document.querySelector("#enterCodeTitle");

let counterBegin = document.createElement("span");
counterBegin.textContent = "Повторная отправка через ";
let counter = document.createElement("span");
let counterEnd = document.createElement("span");
counterEnd.textContent = " сек";
counterContainer.appendChild(counterBegin);
counterContainer.appendChild(counter);
counterContainer.appendChild(counterEnd);

function startCountdown(counter) {
	timerId = setInterval(() => {
		if (+counter.textContent > 0) {
			counter.textContent -= 1;
		} else {
			counterContainer.remove();
			authRegContainer.appendChild(sentCodeAgain);
			clearInterval(timerId);
		}
	}, 1000);
}

sentCodeAgain.onclick = function () {
	counter.textContent = "59";
	startCountdown(counter);
	authRegContainer.appendChild(counterContainer);
	sentCodeAgain.remove();
}

backwardAuth.onclick = function () {
	clearTimeout(timerId)
	if (document.querySelector("#counterContainer")) counterContainer.remove();
	if (document.querySelector("#sentCodeAgain")) sentCodeAgain.remove();
	if (document.querySelector(".small-text")) smallErrorText.remove();
	smallErrorText.textContent = "Некорректный номер телефона"
	enterCodeTitle.style.display = "none";
	authInput.placeholder = "Номер телефона";
	authInput.value = "";
	authInput.style.background = "rgba(122, 146, 165, 0.3)";
	authInput.style.color = "#7A92A5";
	if (continueBtn.classList.contains("redBtn")) continueBtn.classList.remove("redBtn");
	continueBtn.textContent = "Продолжить";
	backwardAuth.style.visibility = "hidden";
}

authInput.onclick = function () {
	if (authInput.placeholder === "Номер телефона" && authInput.value === "" && continueBtn.textContent === "Продолжить") authInput.value = "+7";
}

function ValidPhone(phone) {
	let re = /^[\d\+][\d\(\)\ -]{10}\d$/;
	return re.test(phone);
}

let smallErrorText = document.createElement("div");
smallErrorText.classList.add("small-text");
smallErrorText.textContent = "Некорректный номер телефона";
smallErrorText.style.color = "#A00000";

continueBtn.onclick = function () {
	if (authInput.value !== "" && continueBtn.textContent === "Продолжить" && authInput.placeholder === "Номер телефона") {
		if (ValidPhone(authInput.value)) {
			authNumber.textContent = authInput.value;
			authInput.value = "";
			backwardAuth.style.visibility = "visible";
			continueBtn.textContent = "Войти";
			authInput.placeholder = "Код из СМС";
			enterCodeTitle.style.display = "block";
			counter.textContent = "59";
			startCountdown(counter);
			if (smallErrorText) smallErrorText.remove();
			continueBtn.classList.remove("redBtn");
			authInput.style.background = "rgba(122, 146, 165, 0.3)";
			authInput.style.color = "#7A92A5";
			authRegContainer.appendChild(counterContainer);
		} else {
			if (!continueBtn.classList.contains("redBtn")) {
				authInput.style.background = "rgba(160, 0, 0, 0.3)";
				authInput.style.color = "#A00000";
				continueBtn.classList.add("redBtn");
				smallErrorText.textContent = "Некорректный номер телефона";
				authRegContainer.appendChild(smallErrorText);
			}
		}
	} else {
		if (authInput.value === "123") {
			console.log("Вход выполнен")
		} else {
			if (!continueBtn.classList.contains("redBtn")) {
				authInput.style.background = "rgba(160, 0, 0, 0.3)";
				authInput.style.color = "#A00000";
				continueBtn.classList.add("redBtn");
				smallErrorText.textContent = "Неверный код";
				authRegContainer.appendChild(smallErrorText);
				if (document.querySelector("#counterContainer")) smallErrorText.after(counterContainer);
				if (document.querySelector("#sentCodeAgain")) smallErrorText.after(sentCodeAgain);
			}
		}
	}

}
