let forgotPass = document.querySelector(".forgot-pass")
let authForm = document.querySelector(".auth-form")
let enterEmailForm = document.querySelector(".enter-email-form")
let changePassForm = document.querySelector(".change-password-form")
let regCodeForm = document.querySelector(".reg-code-form")
let bottomContainer = document.querySelector(".bottom-auth-container")
let regBtn = document.querySelector(".reg")
let authBtn = document.querySelector(".auth")
let enter = document.querySelector(".enter")
let backward = document.querySelector("#backwardAuth")
let recoverPass = document.querySelector(".recover")
let registrationBtn = document.querySelector(".registration")

authBtn.onclick = function () {
	if (regBtn.classList.contains("active")) {
		let regContainer = document.querySelector(".reg-container")
		regBtn.classList.remove("active")
		authBtn.classList.add("active")
		regContainer.remove()
		let authCont = document.createElement("div")
		authCont.classList.add("auth-container")
		let pMail = document.createElement("p")
		pMail.classList.add("input-name")
		pMail.textContent = "Email"
		let lMail = document.createElement("label")
		let inpMail = document.createElement("input")
		inpMail.placeholder = "Example@mail.ru"
		let pPass = document.createElement("p")
		pPass.classList.add("input-name")
		pPass.textContent = "Пароль"
		let lPass = document.createElement("label")
		let inpPass = document.createElement("input")
		inpPass.placeholder = "Password"
		authCont.appendChild(pMail)
		lMail.appendChild(inpMail)
		authCont.appendChild(lMail)
		authCont.appendChild(pPass)
		lPass.appendChild(inpPass)
		authCont.appendChild(lPass)
		authCont.appendChild(forgotPass)
		enter.textContent = "Войти"
		enter.classList.remove("registration")
		enter.classList.add("enter")
		authForm.appendChild(authCont)
		forgotPass.style.display = "block"
		authCont.after(bottomContainer)
	}
}
regBtn.onclick = function () {
	if (authBtn.classList.contains("active")) {
		let authContainer = document.querySelector(".auth-container")
		authBtn.classList.remove("active")
		regBtn.classList.add("active")
		authContainer.remove()
		let regCont = document.createElement("div")
		regCont.classList.add("reg-container")
		let pMail = document.createElement("p")
		pMail.classList.add("input-name")
		pMail.textContent = "Email"
		let lMail = document.createElement("label")
		let inpMail = document.createElement("input")
		let pPass = document.createElement("p")
		inpMail.placeholder = "Example@mail.ru"
		pPass.classList.add("input-name")
		pPass.textContent = "Пароль"
		let lPass = document.createElement("label")
		let inpPass = document.createElement("input")
		inpPass.placeholder = "Password"
		let pPassConfirm = document.createElement("p")
		pPassConfirm.classList.add("input-name")
		pPassConfirm.textContent = "Повторите пароль"
		let lPassConfirm = document.createElement("label")
		let inpPassConfirm = document.createElement("input")
		inpPassConfirm.placeholder = "Password"
		lMail.appendChild(inpMail)
		lPass.appendChild(inpPass)
		lPassConfirm.appendChild(inpPassConfirm)
		regCont.appendChild(pMail)
		regCont.appendChild(lMail)
		regCont.appendChild(pPass)
		regCont.appendChild(lPass)
		regCont.appendChild(pPassConfirm)
		regCont.appendChild(lPassConfirm)
		authForm.appendChild(regCont)
		regCont.after(bottomContainer)
		enter.textContent = "Продолжить"
		enter.classList.remove("enter")
		enter.classList.add("registration")
	}
}
forgotPass.onclick = function () {
	authForm.style.display = "none"
	enterEmailForm.style.display = "block"
	backward.style.visibility = "visible"
	changePassForm.style.display = "none"
}

backward.onclick = function () {
	if (backward.style.visibility === "visible") {
		if (backward.classList.contains("auth")) {
			authForm.style.display = "none"
			enterEmailForm.style.display = "block"
			regCodeForm.style.display = "none"
			changePassForm.style.display = "none"
			backward.classList.remove("auth")
		} else {
			authForm.style.display = "block"
			enterEmailForm.style.display = "none"
			backward.style.visibility = "hidden"
			regCodeForm.style.display = "none"
			changePassForm.style.display = "none"
		}
	}
}

recoverPass.onclick = function () {
	if (recoverPass) {
		if (document.querySelector(".inp-recover").value !== "") {
			enterEmailForm.style.display = "none"
			changePassForm.style.display = "block"
			backward.classList.add("auth")
		}
	}
}

if (registrationBtn) registrationBtn.onclick = function () {
	if (registrationBtn) {
		backward.style.visibility = "visible"
		regCodeForm.style.display = "block"
		authForm.style.display = "none"
	}
}
