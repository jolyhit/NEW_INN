let mapStoreSelector = document.querySelector("#mapStoreSelector");
let mapStoreSelect = document.querySelector(".map-choose-store");
let closeMapChooseStore = document.querySelector("#closeMapChooseStore");
let addressContainers = document.querySelectorAll(".address-container");
let svgContainers = document.querySelectorAll(".svg-container")
let firstThis;
let secThis;
let thirdThis;

mapStoreSelector.onclick = function () {
	if (mapStoreSelect.style.display !== "block") {
		mapStoreSelect.style.display = "block";
		mapStoreSelect.style.animation = "moveBottomTop 0.4s forwards";

	}
}
closeMapChooseStore.onclick = function () {
	if (mapStoreSelect.style.display === "block") {
		mapStoreSelect.style.animation = "moveBottomTopBack 0.3s forwards";
		setTimeout(function () {
			mapStoreSelect.style.display = "none";
		}, 200);
	}
}

ymaps.ready(init);

function init() {
	let myMap = new ymaps.Map("map", {
		center: [54.70393245604379, 20.514312584960898], zoom: 12, controls: []
	});
	let firstAnimatedLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark first"><div class="circle-layout"></div></div>', {
		build: function () {
			firstAnimatedLayout.superclass.build.call(this);
			firstThis = this;
			let element = this.getParentElement().getElementsByClassName('placemark')[0];
			let size = this.isActive ? 60 : 34;
			let smallShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
			let bigShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
			this.getData().options.set('shape', this.isActive ? bigShape : smallShape);
			let b = document.querySelector(".second.active");
			let c = document.querySelector(".third.active");
			if (b) {
				b.classList.remove("active")
				b.style.animation = ".35s show-small-placemark";
				b.firstElementChild.style.display = "block";
				addressContainers[1].style.animation = "heightNormal .3s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[2].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[0].style.display = "block";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
				secThis.inited = true;
				secThis.isActive = false;

			}
			if (c) {
				c.classList.remove("active")
				c.style.animation = ".35s show-small-placemark";
				c.firstElementChild.style.display = "block";
				addressContainers[0].style.animation = "heightNormal .3s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[1].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				addressContainers[0].style.display = "block";
				addressContainers[1].style.display = "block";
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[0].style.display = "block";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
				thirdThis.inited = true;
				thirdThis.isActive = false;
			}
			if (this.isActive) {
				element.classList.add("active");
				element.style.animation = ".35s show-big-placemark";
				element.firstElementChild.style.display = "none";
				addressContainers[0].style.animation = "heightZero .3s forwards";
				addressContainers[2].style.animation = "heightZero .3s forwards";
				svgContainers[0].style.animation = "heightZero .3s forwards";
				svgContainers[1].style.animation = "heightZero .3s forwards";
				setTimeout(function () {
					svgContainers[0].style.display = "none";
					svgContainers[1].style.display = "none";
					addressContainers[0].style.display = "none";
				}, 300);
			} else if (this.inited) {
				addressContainers[0].style.animation = "heightNormal .1s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[2].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				addressContainers[0].style.display = "block";
				svgContainers[0].style.display = "block";
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
				setTimeout(function () {
					svgContainers[0].style.display = "block";
					svgContainers[1].style.display = "block";
				}, 300);
				element.classList.remove("active");
				element.style.animation = ".35s show-small-placemark";
			}
			if (!this.inited) {
				this.inited = true;
				this.isActive = false;
				this.getData().geoObject.events.add('click', function () {
					this.isActive = !this.isActive;
					this.rebuild();
				}, this);
			}
		}
	});
	let secondAnimatedLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark second"><div class="circle-layout"></div></div>', {
		build: function () {
			firstAnimatedLayout.superclass.build.call(this);
			secThis = this;
			let element = this.getParentElement().getElementsByClassName('placemark')[0];
			let size = this.isActive ? 60 : 34;
			let smallShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
			let bigShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
			this.getData().options.set('shape', this.isActive ? bigShape : smallShape);
			let a = document.querySelector(".first.active");
			let c = document.querySelector(".third.active");
			if (a) {
				a.classList.remove("active")
				a.style.animation = ".35s show-small-placemark";
				a.firstElementChild.style.display = "block";
				addressContainers[0].style.animation = "heightNormal .1s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[2].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				addressContainers[0].style.display = "block";
				svgContainers[0].style.display = "block";
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
				firstThis.inited = true;
				firstThis.isActive = false;
			}
			if (c) {
				c.classList.remove("active")
				c.style.animation = ".35s show-small-placemark";
				c.firstElementChild.style.display = "block";
				addressContainers[0].style.animation = "heightNormal .3s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[1].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				addressContainers[0].style.display = "block";
				addressContainers[1].style.display = "block";
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[0].style.display = "block";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
				thirdThis.inited = true;
				thirdThis.isActive = false;
			}
			if (this.isActive) {
				element.classList.add("active");
				element.style.animation = ".35s show-big-placemark";
				element.firstElementChild.style.display = "none";
				addressContainers[1].style.animation = "heightZero .3s forwards";
				addressContainers[2].style.animation = "heightZero .3s forwards";
				svgContainers[0].style.animation = "heightZero .3s forwards";
				svgContainers[1].style.animation = "heightZero .3s forwards";
			} else if (this.inited) {
				element.classList.remove("active");
				element.style.animation = ".35s show-small-placemark";
				addressContainers[1].style.animation = "heightNormal .3s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[2].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[0].style.display = "block";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
			}
			if (!this.inited) {
				this.inited = true;
				this.isActive = false;
				this.getData().geoObject.events.add('click', function () {
					this.isActive = !this.isActive;
					this.rebuild();
				}, this);
			}
		}
	});
	let thirdAnimatedLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark third"><div class="circle-layout"></div></div>', {
		build: function () {
			firstAnimatedLayout.superclass.build.call(this);
			thirdThis = this;
			let element = this.getParentElement().getElementsByClassName('placemark')[0];
			let size = this.isActive ? 60 : 34;
			let smallShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
			let bigShape = {type: 'Circle', coordinates: [0, 0], radius: size / 2};
			this.getData().options.set('shape', this.isActive ? bigShape : smallShape);
			let a = document.querySelector(".first.active");
			let b = document.querySelector(".second.active");
			if (b) {
				b.classList.remove("active")
				b.style.animation = ".35s show-small-placemark";
				b.firstElementChild.style.display = "block";
				addressContainers[1].style.animation = "heightNormal .3s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[2].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[0].style.display = "block";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
				secThis.inited = true;
				secThis.isActive = false;

			}
			if (a) {
				a.classList.remove("active")
				a.style.animation = ".35s show-small-placemark";
				a.firstElementChild.style.display = "block";
				addressContainers[0].style.animation = "heightNormal .1s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[2].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				addressContainers[0].style.display = "block";
				svgContainers[0].style.display = "block";
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
				firstThis.inited = true;
				firstThis.isActive = false;
			}
			if (this.isActive) {
				element.classList.add("active");
				element.style.animation = ".35s show-big-placemark";
				element.firstElementChild.style.display = "none";
				addressContainers[0].style.animation = "heightZero .3s forwards";
				addressContainers[1].style.animation = "heightZero .3s forwards";
				svgContainers[0].style.animation = "heightZero .3s forwards";
				svgContainers[1].style.animation = "heightZero .3s forwards";
				setTimeout(function () {
					svgContainers[0].style.display = "none";
					svgContainers[1].style.display = "none";
					addressContainers[0].style.display = "none";
					addressContainers[1].style.display = "none";
				}, 300);
			} else if (this.inited) {
				element.classList.remove("active");
				element.style.animation = ".35s show-small-placemark";
				addressContainers[0].style.animation = "heightNormal .3s forwards";
				addressContainers[0].style.marginBottom = "18px"
				addressContainers[1].style.animation = "heightNormal .3s forwards";
				addressContainers[1].style.marginBottom = "18px"
				addressContainers[0].style.display = "block";
				addressContainers[1].style.display = "block";
				svgContainers[0].style.animation = "heightNormal .1s forwards";
				svgContainers[0].style.display = "block";
				svgContainers[1].style.display = "block";
				svgContainers[1].style.animation = "heightNormal .1s forwards";
				setTimeout(function () {
					svgContainers[0].style.display = "block";
					svgContainers[1].style.display = "block";
				}, 300);
			}
			if (!this.inited) {
				this.inited = true;
				this.isActive = false;
				this.getData().geoObject.events.add('click', function () {
					this.isActive = !this.isActive;
					this.rebuild();
				}, this);
			}
		}
	});
	myMap.geoObjects.add(new ymaps.Placemark([54.72095274994608, 20.432735085736915], {}, {
		iconLayout: firstAnimatedLayout, hasBalloon: false
	}));
	myMap.geoObjects.add(new ymaps.Placemark([54.71221365154329, 20.487211545074416], {}, {
		iconLayout: secondAnimatedLayout, hasBalloon: false
	}));
	myMap.geoObjects.add(new ymaps.Placemark([54.68577654150816, 20.48701503877043], {}, {
		iconLayout: thirdAnimatedLayout, hasBalloon: false
	}));
	myMap.controls.add('zoomControl', {
		size: "small",
		position: {
			right: 20,
			bottom: 20,
		}
	});
}
