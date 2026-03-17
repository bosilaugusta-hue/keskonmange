const divCards = document.querySelector('.cards');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let index = 0;

const numberOfCards = document.querySelectorAll(".box-card");
const padding = 1 * 16 /*padding=1rem*/
const gap = 2 * 16; /*gap=2rem*/
const boxCardWidth = numberOfCards[0].offsetWidth + padding + gap;
const minIndex = 0;
const maxIndex = numberOfCards.length - 2; /*il restera tjs 2 box-card affichées*/

const firstDot = document.getElementById('firstDot');
const secondDot = document.getElementById('secondDot');
const thirdDot = document.getElementById('thirdDot');

function removeClassActive(dot) {
    if (dot.classList.contains("active")) {
        dot.classList.remove("active")
    }
};

function addClassActive() {
    switch (index) {
        case 0: firstDot.classList.add("active");
            removeClassActive(secondDot);
            removeClassActive(thirdDot);
            break;
        case 1: secondDot.classList.add("active");
            removeClassActive(firstDot);
            removeClassActive(thirdDot);
            break;
        case 2: thirdDot.classList.add("active");
            removeClassActive(firstDot);
            removeClassActive(secondDot);
            break;
    };
};

function moveCards() {
    divCards.style.transform = `translateX(-${index * boxCardWidth}px)`;
    addClassActive();
};

function goToIndex(newIndex) {
    index = newIndex;
};

btnNext.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        moveCards();
    } else {
        return
    }
});

btnPrev.addEventListener('click', () => {
    if (index > minIndex) {
        index--;
        moveCards();
    } else {
        return
    }
});

firstDot.addEventListener('click', () => {
    goToIndex(0);
    moveCards();
});

secondDot.addEventListener('click', () => {
    if (index === 0 || index === 2) {
        goToIndex(1);
        moveCards();
    } else {
        return
    }
});

thirdDot.addEventListener('click', () => {
    goToIndex(2);
    moveCards();
});


