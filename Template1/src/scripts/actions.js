const hamburger = document.querySelector('.hamburger');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    sideContainer.classList.toggle('show');
  });
}
