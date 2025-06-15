// Run this once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const navHeight = nav.offsetHeight;
  const navLinks = document.querySelectorAll('nav ul li a');
  const sections = document.querySelectorAll('section');
  const backToTop = document.getElementById('back-to-top');

  // Show/hide the "Back to Top" button based on scroll position
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 100 ? 'block' : 'none';
    });

    // Smooth scroll to top when "Back to Top" is clicked
    backToTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Enable smooth scrolling when nav links are clicked
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // Remove "#" from href
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offset = targetSection.offsetTop - navHeight; // Account for nav height
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  // Highlight the nav link of the section currently in view
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    // Default to the first section if no match found
    if (current === '') {
      current = sections[0].getAttribute('id');
    }

    // Update the active class on nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
});
