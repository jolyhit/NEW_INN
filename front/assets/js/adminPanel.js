let width = document.body.clientWidth;
let leftAnswerSection = document.querySelectorAll(".left-answers-section")
let usersSectionButton = document.querySelector(".users-section");
let ordersSectionButton = document.querySelector(".orders-section");
let answersSectionButton = document.querySelector(".answers-section");
let modalBackground = document.querySelectorAll(".modal-background");
let modalButtons = document.querySelectorAll(".modal-button");
let closeModal = document.querySelector(".close-modal");
let modalConfirmButton = document.querySelector(".button-confirm");
let adminPageSelectorName = document.querySelector(".admin-page-selector-name")
let editAnswer = document.querySelectorAll(".edit-answer")
let deleteAnswer = document.querySelectorAll(".delete-answer")
let adminPanelSelector = document.querySelector(".admin-page-selector");
let adminPanelSelect = document.querySelector(".admin-page-select");
let adminUserSvg = document.querySelector(".admin-user-svg");
let addSection = document.querySelector(".add-section-button");
let modalNewSection = document.querySelector(".modal-add-new-section");
let modalEditSection = document.querySelector(".modal-edit-section");
let modalConfirm = document.querySelector(".modal-confirm");
let adminUserContainer = document.querySelector(".admin-user-container");
let adminOrdersContainer = document.querySelector(".admin-orders-container");
let adminAnswersContainer = document.querySelector(".admin-answers-container");
let adminSearchContainer = document.querySelector(".admin-search-container");
let adminEditAnswerContainer = document.querySelector(".admin-edit-answer-container");
let adminAddAnswerContainer = document.querySelector(".admin-add-answer-container");

let selectUsers = adminPanelSelect.querySelector("#selectUsers");
let selectOrders = adminPanelSelect.querySelector("#selectOrders");
let selectAnswers = adminPanelSelect.querySelector("#selectAnswers");

let buttonSwapSection = document.querySelectorAll(".right-answers-section");
let editSection = document.querySelectorAll(".edit-section");
let addAnswer = document.querySelectorAll(".add-answer");
let deleteSection = document.querySelectorAll(".delete-section");
let backwardToAnswersContainer = document.querySelectorAll(".backward-to-answers-container")

addAnswer.forEach((button) => {
	button.onclick = function () {
		adminAnswersContainer.style.display = "none";
		adminAddAnswerContainer.style.display = "block";
		addSection.style.display = "none";
	}
})

backwardToAnswersContainer.forEach((button) => {
	button.onclick = function () {
		adminAnswersContainer.style.display = "block";
		adminAddAnswerContainer.style.display = "none";
		adminEditAnswerContainer.style.display = "none";
		addSection.style.display = "block";
	}
})

editSection.forEach((button) => {
	button.onclick = function () {
		modalEditSection.style.display = "block";
	}
})

deleteSection.forEach((button) => {
	button.onclick = function () {
		modalConfirm.style.display = "block";
	}
})

editAnswer.forEach((button) => {
	button.onclick = function () {
		adminAnswersContainer.style.display = "none";
		adminEditAnswerContainer.style.display = "block";
		addSection.style.display = "none";
	}
})

deleteAnswer.forEach((button) => {
	button.onclick = function () {
		modalConfirm.style.display = "block";
	}
})

leftAnswerSection.forEach((button) => {
	button.onclick = function () {
		let container = button.parentElement.parentElement.querySelector(".answers-container");
		let mobileHide = container.parentElement.querySelector(".right-answers-section")
		let svg = container.parentElement.querySelector("svg");
		if (container && container.classList.contains("open")) {
			container.classList.remove("open");
			mobileHide.classList.remove("mobile-hide")
			svg.style.rotate = "0deg";
		} else {
			container.classList.add("open");
			mobileHide.classList.add("mobile-hide")
			svg.style.rotate = "180deg";
		}
	}
})

if (width <= 1350) {
	buttonSwapSection.forEach((button) => {
		if (button.firstElementChild.textContent !== "Добавить вопрос") {
			swap(button.firstElementChild, button.firstElementChild.nextElementSibling);
			swap(button.firstElementChild.nextElementSibling, button.lastElementChild);
		}
	});
}

adminPanelSelector.onclick = function () {
	if (!adminPanelSelect.classList.contains("open")) {
		adminPanelSelect.classList.add("open");
		adminPanelSelect.style.display = "block";
		adminUserSvg.style.rotate = "180deg";
		adminPanelSelect.style.animation = "ani 0.7s forwards";
	} else {
		adminPanelSelect.classList.remove("open");
		adminUserSvg.style.rotate = "0deg";
		adminPanelSelect.style.animation = "aniBack 0.7s forwards";
		setTimeout(function () {
			adminPanelSelect.style.display = "none";
		}, 400);
	}
}

addSection.onclick = function () {
	modalNewSection.style.display = "block";
}

ordersSectionButton.onclick = orders;
selectOrders.onclick = orders;

function orders() {
	adminSearchContainer.style.visibility = "visible";
	adminSearchContainer.classList.remove("mobile");
	addSection.style.display = "none";
	adminUserContainer.style.display = "none";
	adminAnswersContainer.style.display = "none";
	adminOrdersContainer.style.display = "block";
	adminEditAnswerContainer.style.display = "none";
	adminAddAnswerContainer.style.display = "none";
	usersSectionButton.classList.remove("active");
	answersSectionButton.classList.remove("active");
	ordersSectionButton.classList.add("active");
	adminPageSelectorName.textContent = "Заказы";
	selectUsers.style.display = "block";
	selectOrders.style.display = "none";
	selectAnswers.style.display = "block";
	adminPanelSelect.style.display = "none";
	adminUserSvg.style.rotate = "0deg";
	adminPanelSelect.classList.remove("open");
}

usersSectionButton.onclick = users;
selectUsers.onclick = users;

function users() {
	adminSearchContainer.style.visibility = "visible";
	adminSearchContainer.classList.remove("mobile");
	addSection.style.display = "none";
	adminUserContainer.style.display = "block";
	adminAnswersContainer.style.display = "none";
	adminOrdersContainer.style.display = "none";
	adminEditAnswerContainer.style.display = "none";
	adminAddAnswerContainer.style.display = "none";
	usersSectionButton.classList.add("active");
	answersSectionButton.classList.remove("active");
	ordersSectionButton.classList.remove("active");
	adminPageSelectorName.textContent = "Пользователи";
	selectUsers.style.display = "none";
	selectOrders.style.display = "block";
	selectAnswers.style.display = "block";
	adminPanelSelect.style.display = "none";
	adminUserSvg.style.rotate = "0deg";
	adminPanelSelect.classList.remove("open");
}

answersSectionButton.onclick = answers;
selectAnswers.onclick = answers;

function answers() {
	adminSearchContainer.style.visibility = "hidden";
	adminSearchContainer.classList.add("mobile");
	addSection.style.display = "block";
	adminUserContainer.style.display = "none";
	adminAnswersContainer.style.display = "block";
	adminOrdersContainer.style.display = "none";
	adminEditAnswerContainer.style.display = "none";
	adminAddAnswerContainer.style.display = "none";
	usersSectionButton.classList.remove("active");
	answersSectionButton.classList.add("active");
	ordersSectionButton.classList.remove("active");
	adminPageSelectorName.textContent = "Вопросы";
	selectUsers.style.display = "block";
	selectOrders.style.display = "block";
	selectAnswers.style.display = "none";
	adminPanelSelect.style.display = "none";
	adminUserSvg.style.rotate = "0deg";
	adminPanelSelect.classList.remove("open");
}

modalBackground.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (e.target.classList.contains("modal-background")) {
			button.parentElement.style.display = "none";
			let inp = button.querySelector(".modal-input");
			if (inp) inp.value = "";
		} else {
			e.stopPropagation();
		}
	})
})
modalButtons.forEach((button) => {
	button.addEventListener('click', () => {
		modalConfirm.style.display = "block";
		modalConfirmButton.onclick = function () {
			modalConfirm.style.display = "none";
			modalEditSection.style.display = "none";
			modalNewSection.style.display = "none";
			console.log("!!");
		}
	})
})
closeModal.onclick = function () {
	modalConfirm.style.display = "none";
}

function swap(node1, node2) {
	const afterNode2 = node2.nextElementSibling;
	const parent = node2.parentNode;
	node1.replaceWith(node2);
	parent.insertBefore(node1, afterNode2);
}

window.addEventListener('resize', () => {
	let width = document.body.clientWidth;
	buttonSwapSection.forEach((button) => {
		if (width <= 1350 && button.firstElementChild.textContent !== "Добавить вопрос") {
			swap(button.firstElementChild, button.firstElementChild.nextElementSibling);
			swap(button.firstElementChild.nextElementSibling, button.lastElementChild);
		}
	});
});
