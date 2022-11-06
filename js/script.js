const menuToggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
});

const handleNavToggle = () => {
  nav.dataset.transitionable = 'true';

  nav.dataset.toggled = nav.dataset.toggled === 'true' ? 'false' : 'true';
};

window.matchMedia('(max-width: 767px)').onchange = () => {
  nav.dataset.transitionable = 'false';

  nav.dataset.toggled = 'false';
};
