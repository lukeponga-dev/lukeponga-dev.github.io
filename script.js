document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.main-nav'); // Use class selector
  const navLinks = document.querySelectorAll('.main-nav .nav-link'); // Use more specific class selectors
  const sections = document.querySelectorAll('section');
  const backToTopButton = document.getElementById('back-to-top');

  // Cache nav height to avoid recalculating on every scroll
  const navHeight = nav ? nav.offsetHeight : 0;

  // Function to smoothly scroll to a target element
  const smoothScrollTo = (targetElement) => {
    if (targetElement) {
      // Calculate offset, considering fixed nav bar
      const offset = targetElement.offsetTop - navHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth' // Modern browsers handle this via CSS `scroll-behavior: smooth`
      });
    }
  };

  // Show/hide the "Back to Top" button based on scroll position
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      // Show button if scrolled down more than viewport height / 2
      backToTopButton.style.display = window.scrollY > window.innerHeight / 2 ? 'block' : 'none';
    });

    // Smooth scroll to top when "Back to Top" is clicked
    backToTopButton.addEventListener('click', e => {
      e.preventDefault();
      // Scroll to the very top (0,0)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Enable smooth scrolling when nav links are clicked
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // Prevent default anchor jump
      const targetId = link.getAttribute('href').substring(1); // Remove "#" from href
      const targetSection = document.getElementById(targetId);
      smoothScrollTo(targetSection);
    });
  });

  // Highlight the nav link of the section currently in view
  window.addEventListener('scroll', () => {
    let currentActiveSectionId = '';

    // Determine the current section based on scroll position
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight; // Adjust for nav height
      const sectionBottom = sectionTop + section.offsetHeight;

      // If the middle of the viewport is within this section
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentActiveSectionId = section.getAttribute('id');
      }
    });

    // Handle the case where no section is in view (e.g., at the very top of the page)
    if (currentActiveSectionId === '' && window.scrollY < sections[0].offsetTop - navHeight) {
      currentActiveSectionId = sections[0].getAttribute('id');
    }

    // Update the active class on nav links
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentActiveSectionId) {
        link.classList.add('active');
      }
    });
  });

  // Initial call to set active link on page load
  window.dispatchEvent(new Event('scroll'));
});
