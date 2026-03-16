const divCards = document.querySelector('.cards');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');

let index = 0;

const numberOfCards = document.querySelectorAll(".box-card");
const padding = 1 * 16 /*padding=1rem*/
const gap = 2 * 16; /*gap=2rem*/
const boxCardWidth = numberOfCards[0].offsetWidth + padding + gap;
const minIndex = 0;
const maxIndex = numberOfCards.length - 2; /*ne peut pas dépasser la dernière box-card, il en restera tjs 2 affichées*/

const firstDot = document.getElementById('firstDot');
const secondDot = document.getElementById('secondDot');
const thirdDot = document.getElementById('thirdDot');

function moveCardsRight() {
    if (index < maxIndex) {
        index++;
        divCards.style.transform = `translateX(-${index * boxCardWidth}px)`;
        console.log(index);
        return true;
    } else {
        return false
    }
};

function moveCardsLeft() {
    if (index > minIndex) {
        index--;
        divCards.style.transform = `translateX(-${index * boxCardWidth}px)`;
        console.log(index);
    }
};

function removeClassActive(dot) {
    if (dot.classList.contains("active")) {
        dot.classList.remove("active")
    }
};

btnNext.addEventListener('click', () => {
    moveCardsRight();
});

btnPrev.addEventListener('click', () => {
    moveCardsLeft();
});


firstDot.addEventListener('click', () => {
    moveCardsLeft();
    firstDot.classList.add("active");
    removeClassActive(secondDot);
    removeClassActive(thirdDot);
});

thirdDot.addEventListener('click', () => {
    moveCardsRight();
    let booleen = moveCardsRight();
    if (booleen === true) {
        thirdDot.classList.add("active");
    }
})

//il faut que le first et le third bougent de 2 crans d'un coup
//il faut que les prev et next add les active correspondant (et remove les autres)
//next next --> third : rien ok
//prev --> third bouge mais pas active