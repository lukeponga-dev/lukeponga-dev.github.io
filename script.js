document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const navHeight = nav.offsetHeight;
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');

  // Smooth scrolling with nav height offset
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offset = targetSection.offsetTop - navHeight;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight active nav link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    // If no section is in view, default to the first section
    if (current === '') {
      current = sections[0].getAttribute('id');
    }

    // Update active class for nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
});
