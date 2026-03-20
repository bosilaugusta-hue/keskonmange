
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
