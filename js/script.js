const collapsibles = document.querySelectorAll(".collapse");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapse--expanded");
    })
);

// Script to change the placeholder on large screens
const searchInput = document.querySelector('.search');
const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleChange(e) {
  if (e.matches) {
    searchInput.placeholder = 'Enter your preferred language';
  } else {
    searchInput.placeholder = 'Search';
  }
}

handleChange(mediaQuery);
mediaQuery.addEventListener('change', handleChange);