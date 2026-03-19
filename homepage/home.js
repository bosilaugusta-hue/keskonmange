const divCards = document.querySelector('.cards');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const allDots = document.getElementsByClassName('dot');

const numberOfCards = document.querySelectorAll(".box-card");

const padding = parseInt(getComputedStyle(divCards).getPropertyValue("padding-left"));
const demiGap = parseInt(getComputedStyle(divCards).getPropertyValue("gap")) / 2;

const boxCardWidth = numberOfCards[0].offsetWidth + padding + demiGap;
//numberOfCards[0].offsetWidth : je vais chercher la largeur d'une box-card

/*je décale de padding et demi-gap pour qu'il reste un demi-gap à gauche de la 2e card etc
puis il faut décaler de demi-gap restant et demi-gap suivant*/

const itemsVisible = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--items-visible")
);
//itemsVisible récupéré selon les media queries

let position = 0;
const minPosition = 0;
const maxPosition = numberOfCards.length - itemsVisible;
//je limite maxPosition pour que le défilement s'arrête sur la dernière box-card

/************************************************************/

function goToPosition(newPosition) {
    position = newPosition;
};

function moveCards() {
    divCards.style.transform = `translateX(-${position * boxCardWidth}px)`;
};
// if position = 0, on est sur la box-card 1, donc 0*boxcardwidth on ne peut pas décaler plus à gauche

function updateClassActive(index) {
    for (let j = 0; j < allDots.length; j++) {
        if (allDots[j].classList.contains("active")) {
            allDots[j].classList.remove("active");
        }
    };
    allDots[index].classList.add("active");
};

/*********************************************************/

btnNext.addEventListener('click', () => {
    if (position < maxPosition) {
        position++;
        moveCards();
        updateClassActive(position);
    } else {
        return
    }
});

btnPrev.addEventListener('click', () => {
    if (position > minPosition) {
        position--;
        moveCards();
        updateClassActive(position);
    } else {
        return
    }
});

for (let i = 0; i < allDots.length; i++) {
    allDots[i].addEventListener("click", () => {
        goToPosition(i);
        moveCards();
        updateClassActive(i);
    }
    )
};