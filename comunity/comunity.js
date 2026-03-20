
const checkboxes = document.querySelectorAll('form input[type="checkbox"]');
  const articles = document.querySelectorAll('.main-article');

  function filter() {
    const active = [...checkboxes]
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    if (active.length === 0) {
      articles.forEach(a => a.hidden = false);
      return;
    }

    articles.forEach(article => {
      const categories = article.dataset.category.split(' ');
      article.hidden = !active.some(val => categories.includes(val));
    });
  }

  checkboxes.forEach(cb => cb.addEventListener('change', filter));




document.querySelectorAll(".followBtn").forEach(button => {
  button.addEventListener("click", function () {
    const isFollowing = this.dataset.following === 'true';

    if(!isFollowing){
this.textContent = 'Suivi ✓'
this.dataset.following = 'true'
this.style.backgroundColor = '#4CAF50'
showNotif('✅ Suivi avec succès !', '#4CAF50');
    } else{
      this.textContent = 'Suivre'
      this.dataset.following = 'false'
      this.style.backgroundColor = 'var(--color-tertiary)'
      showNotif('❌ Vous ne suivez plus cet utilisateur.', '#e74c3c')
    }
      


  })
});

function showNotif(message, color) {
  const notif = document.createElement('div');
  notif.textContent = message;
  notif.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: ${color};
    color: white;
    padding: 12px 24px;
    border-radius: 10px;
    font-family: var(--font);
    font-size: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 9999;
    transition: opacity 0.5s ease;
  `;
  document.body.appendChild(notif);

 setTimeout(() => {
    notif.style.opacity = '0';
    setTimeout(() => notif.remove(), 500);
  }, 2500);
}