let listOpeners = document.querySelectorAll(".opener");
listOpeners.forEach((button) => {
	button.addEventListener('click', () => {
		if (button.parentElement.classList.contains("open")){
			if (button.nextElementSibling) {
				button.nextElementSibling.style.visibility = "hidden";
			}
			button.parentElement.classList.remove("open");
		} else {
			if (button.nextElementSibling) {
				button.nextElementSibling.style.visibility = "visible";
			}
			button.parentElement.classList.add("open");
		}

	})
})
