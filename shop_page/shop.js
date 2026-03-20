const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.box-card'); // On cible tes cartes
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("mousemove", (e) => {
    const hero = document.querySelector(".hero");
    const speed = 2;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    hero.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
});