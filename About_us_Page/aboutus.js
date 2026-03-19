const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, { threshold: 0.8 });

cards.forEach(card => observer.observe(card));



// ANIMATION pour DREAM TEAM ?


// compteur de like (sans database...)
const votes = {
    KeskonTricotte: 0,
    KeskonEcoute: 0,
    KeskonCode: 0,
    KeskonBoit: 0,
    KeskonRegarde: 0
};

// Pour charger les votes sauvegardés dans la mémoire dure
Object.keys(votes).forEach(key => {
    const save = localStorage.getItem(key);
    if (save) votes[key] = parseInt(save);
});

// Ajoute un compteur de vote à chaque iconitem
document.querySelectorAll('.iconitem').forEach(item => {
    const name = item.querySelector('a').textContent;
    
    // le compteur
    const counter = document.createElement('span');
    counter.classList.add('vote-counter');
    counter.textContent = votes[name] || 0;
    item.appendChild(counter);

    // les votes par clic
    item.addEventListener('click', () => {
        votes[name] = (votes[name] || 0) + 1;
        localStorage.setItem(name, votes[name]);
        counter.textContent = votes[name];

        // Déclenche l'animation
    counter.classList.remove('vote-animate');
    void counter.offsetWidth; // pour forcer à relancer l'animation
    counter.classList.add('vote-animate');
    });
});