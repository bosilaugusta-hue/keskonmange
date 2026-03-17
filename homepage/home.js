const divCards = document.querySelector('.cards');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const allDots = document.getElementsByClassName('dot');

const numberOfCards = document.querySelectorAll(".box-card");
const padding = 1 * 16 /*padding-côté=1rem*/
const demiGap = 1 * 16; /*gap=2rem*/
const boxCardWidth = numberOfCards[0].offsetWidth + padding + demiGap;
/*numberOfCards[0].offsetWidth : je vais chercher la largeur d'une box-card*/
/*je décale de padding et demi-gap = 1+1 = 2rem
puis il faut décaler de demi-gap restant et demi-gap suivant= 1+1 = 2rem*/

let position = 0;
const minPosition = 0;
const maxPosition = numberOfCards.length - 2;
/*il restera tjs 2 box-card affichées*/

/************************************************************/

function goToPosition(newPosition) {
    position = newPosition;
};

function moveCards() {
    divCards.style.transform = `translateX(-${position * boxCardWidth}px)`;
};

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


