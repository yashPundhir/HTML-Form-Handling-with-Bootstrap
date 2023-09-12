// let openModalBtn = document.querySelector("#open-modal");

// let closeModalBtn = document.querySelector("#close-modal");

// let modal = document.querySelector("#modal");

// openModalBtn.addEventListener("click", () => {
// 	modal.showModal();
// 	document.body.classList.add("scroll");
// });

// closeModalBtn.addEventListener("click", () => {
// 	modal.close();
// 	document.body.classList.remove("scroll");
// });

let slider = document.querySelector("#slider");
let pricing1 = document.querySelector(".pricing-1");
let pricing1Btn = document.querySelector(
	".pricing-1 .card-body .pricing-button"
);
let pricing2 = document.querySelector(".pricing-2");
let pricing2Btn = document.querySelector(
	".pricing-2 .card-body .pricing-button"
);
let pricing3 = document.querySelector(".pricing-3");
let pricing3Btn = document.querySelector(
	".pricing-3 .card-body .pricing-button"
);

console.log(slider.value);

slider.addEventListener("change", function () {
	let currentValue = slider.value;
	// console.log("Value changed to: " + currentValue);
	if (currentValue == 0) {
		pricing1.setAttribute("id", "selected-card");
		pricing2.removeAttribute("id");
		pricing3.removeAttribute("id");
		pricing1Btn.classList.add("btn-outline-primary");
		pricing2Btn.classList.remove("btn-outline-primary");
		pricing3Btn.classList.remove("btn-outline-primary");
	}
	if (currentValue == 1) {
		pricing2.setAttribute("id", "selected-card");
		pricing1.removeAttribute("id");
		pricing3.removeAttribute("id");
		pricing2Btn.classList.add("btn-outline-primary");
		pricing1Btn.classList.remove("btn-outline-primary");
		pricing3Btn.classList.remove("btn-outline-primary");
	}
	if (currentValue == 2) {
		pricing3.setAttribute("id", "selected-card");
		pricing2.removeAttribute("id");
		pricing1.removeAttribute("id");
		pricing3Btn.classList.add("btn-outline-primary");
		pricing2Btn.classList.remove("btn-outline-primary");
		pricing1Btn.classList.remove("btn-outline-primary");
	}
});
