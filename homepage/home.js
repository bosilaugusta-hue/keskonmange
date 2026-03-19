const divCards = document.querySelector(".cards");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let index = 0;

const numberOfCards = document.querySelectorAll(".card");
const maxIndex = numberOfCards.length - 1;
const minIndex = 0;

btnNext.addEventListener("click", () => {
	if (index < maxIndex) {
		index++;
		divCards.style.transform = `translateX(-${index * 256}px)`;
	}
});

btnPrev.addEventListener("click", () => {
	if (index > minIndex) {
		index--;
		divCards.style.transform = `translateX(-${index * 256}px)`;
	}
});
