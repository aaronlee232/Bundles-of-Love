const navSlide = () => {
  const burger = document.querySelector('.burger');
  const menuLinks = document.querySelector('.links');
  const navLinks = document.querySelectorAll('.links a');

  burger.addEventListener('click', () => {
    menuLinks.classList.toggle('links-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
  });
};

navSlide();
